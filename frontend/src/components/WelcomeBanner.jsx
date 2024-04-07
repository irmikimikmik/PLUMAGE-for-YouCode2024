import React, { useEffect, useState } from 'react';
import styles from "@/styles/banner.module.css";
import AuthService from '../app/services/auth.service';

export default function WelcomeBanner() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log('Logged in user:', user);
    setUsername(user.username || 'Guest'); // Set the username, default to 'Guest' if not found
  }, []);

  return (
    <div id="welcome-banner">
      <h1>Welcome, {username}</h1>
    </div>
  );
}
