// resources used on this page:
// https://github.com/bezkoder/node-js-express-login-example?tab=readme-ov-file
// https://code-boxx.com/nodejs-user-login-jwt/
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");


const app = express();

app.use(cors());
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "youCodeCookie-session",
        keys: ["COOKIE_SECRET"], // should use as secret environment variable
        httpOnly: true,
        sameSite: 'strict'
    })
);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to YouCode2024 application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const port = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.post("/out", (req, res) => {
    res.status(200);
    res.send("OK");
});
