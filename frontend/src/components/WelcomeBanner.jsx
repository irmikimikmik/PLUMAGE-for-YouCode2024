import React, { useEffect, useState } from 'react';
import styles from "@/styles/welcomebanner.module.css";
import AuthService from '../app/services/auth.service';

export default function WelcomeBanner() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log('Logged in user:', user);
    setUsername(user.username || 'Guest'); // Set the username, default to 'Guest' if not found
  }, []);

  return (
    <div className={styles.banner}>
      {/* Overlay text on the image */}
      <h1>Welcome, {username}</h1>
    </div>
  );
}
