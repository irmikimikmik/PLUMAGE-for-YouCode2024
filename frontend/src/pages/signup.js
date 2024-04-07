import NavBar from "@/components/NavBar";
import React, { useState } from 'react';
import AuthService from '../app/services/auth.service';
import Link from 'next/link';
import styles from './AuthForm.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.register(username, email, password);
      console.log('Signed up user:', user);
      // You might want to log the user in right away or redirect to the login page
    } catch (error) {
      console.error('Signup error:', error.response.data.message);
      // Handle signup error
    }
  };

  return (
    <div className="form-container">
      <div className="auth-grid">
        <div className="left-box">
          {/* Content for the left box */}
        </div>
        <div className="right-box">
          <form onSubmit={handleSignup} className="flex flex-col items-center">
            <h2 className="form-title">Create an account</h2>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Name</label>
              <input id="username" type="text" placeholder="Your name" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input id="email" type="email" placeholder="Your email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">Password</label>
              <input id="password" type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="submit-button">CREATE AN ACCOUNT</button>
            <div className="login-link">
              <span>Already have an account?</span>
              <Link href="/login"><button type="button" className="login-link-button">LOG IN</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
