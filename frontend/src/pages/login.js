import React, { useState } from 'react';
import AuthService from '../app/services/auth.service';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(username, password);
      console.log('Logged in user:', user);
      // Store user details and token to local storage or context to keep the user logged in
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect user to the profile page or home page after login
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      // Handle login error, such as displaying a notification to the user
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
