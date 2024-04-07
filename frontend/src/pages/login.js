import React, { useState } from "react";
import AuthService from "../app/services/auth.service";
import Link from "next/link";
import styles from "../styles/AuthForm.css";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(email, password);
      console.log("Logged in user:", user);
      router.push("/home");
    } catch (error) {
      console.error("Login error:", error.response.data.message);
    }
  };

  return (
    <div className="header">
      <NavBar />
      <div className="form-container">
        <div className="auth-grid">
          <div className="login-image">
            {/* Left box with background image for the login page */}
          </div>
          <div className="right-box">
            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <h2 className="form-title">LOGIN</h2>
              <div className="">
                <div className="input-group py-5">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group py-5">
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="submit-button">
                Login
              </button>
              <div className="login-link">
                <span>DON'T HAVE AN ACCOUNT?</span>
                <Link href="/signup">
                  <button className="login-link-button">SIGN UP</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
