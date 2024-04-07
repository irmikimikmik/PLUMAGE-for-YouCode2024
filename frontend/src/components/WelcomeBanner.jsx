import React, { useEffect, useState } from 'react';
const userData = require('../../public/mocks/userProfiles.json');

export default function WelcomeBanner() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('Logged in user:', userData[0].username);
    // TODO There is an issue with rendering the image here
    // Set the username, default to 'Guest' if not found
    setUsername(userData[0].username || 'Guest');
  }, []);

  return (
    <div id="welcome-banner">
      <h1>Welcome, {username}</h1>
    </div>
  );
}
