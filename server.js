// (A) INITIALIZE
// (A1) LOAD REQUIRED MODULES
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
    res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// ???
function initial() {
    Role.create({
        id: 1,
        name: "user",
    });

    Role.create({
        id: 2,
        name: "moderator",
    });

    Role.create({
        id: 3,
        name: "admin",
    });
}

app.post("/out", (req, res) => {
    res.clearCookie("JWT");
    res.status(200);
    res.send("OK");
});

app.listen(80);