import styles from "../styles/banner.module.css";
import "../app/globals.css";
import React, { useEffect, useState } from 'react';
const userData = require('../../public/mocks/userProfiles.json');
import styles from "@/styles/banner.module.css"

export default function WelcomeBanner() {
  const username = userData && userData.length > 0 ? userData[0].username : 'Guest';

  return (
    <div className={styles.welcomeBanner}>
      <div className={styles.textSmallLeft}>
        <h1>Welcome, {username}</h1>
      </div>
    </div>
  );
  
}
