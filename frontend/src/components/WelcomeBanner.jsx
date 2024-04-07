import React, { useEffect, useState } from 'react';
const userData = require('../../public/mocks/userProfiles.json');

export default function WelcomeBanner() {
  const username = userData && userData.length > 0 ? userData[0].username : 'Guest';

  return (
    <div className="banner">
      <h1>Welcome, {username}</h1>
    </div>
  );
}
