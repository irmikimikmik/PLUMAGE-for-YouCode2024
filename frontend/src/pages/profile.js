import AppNavBar from "@/components/AppNavBar";
import styles from '../styles/profile.css';
import React, { useEffect, useState } from 'react';
import "../app/globals.css";
const userData = require('../../public/mocks/userProfiles.json');
let GPTcolorsString;
let GPTreasoning;
let GPTcolors;

function fetchChatPT4VisionOutput() {
    fetch('http://localhost:3001/openAIEndpoint')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("response: " + JSON.stringify(data));
            // Handle the successful response data here
            GPTcolors = data.colors;
            GPTreasoning = data.reasoning;
            const GPTcolorsString = arrayToString(data.colors);
            
            console.log("GPTcolors: " + GPTcolors);
            console.log("GPTreasoning: " + GPTreasoning);
            console.log("GPTcolorsString: " + GPTcolorsString);
        })
        .catch(error => {
            console.error('Fetching ChatGPT-4 Vision output failed:', error);
            // Handle the error case here
            // You might want to set an error state or rethrow the error
        });
}

function arrayToString(array) {
    // Check if the input is a valid array
    if (!Array.isArray(array) || array.length === 0) {
        return ''; // Return an empty string for invalid input or empty array
    }

    // Join array elements with a comma and a space, and add a period at the end
    return array.join(', ') + '.';
}

export default function Profile() {
    const [GPTcolorsString, setGPTcolorsString] = useState('');
    const [GPTreasoning, setGPTreasoning] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/openAIEndpoint')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Set the state with the fetched data
                setGPTcolorsString(arrayToString(data.colors));
                setGPTreasoning(data.reasoning);
            })
            .catch(error => {
                console.error('Fetching ChatGPT-4 Vision output failed:', error);
                // Optionally update state to indicate the error
            });
    }, []);

    // fetchChatPT4VisionOutput();

    return (
        <div className="profile-container">
            <AppNavBar/>
          <h1 className="column-header">Your Profile</h1>
          <div className="profile-grid">
            {/* Left Column */}
            <div className="left-column">
              <h2 className="column-header">Personal Information</h2>
              <ul className="details-list">
                <li className="details-item">Name: {userData[0].username}</li>
                <li className="details-item">Email: {userData[0].email}</li>
                <li className="details-item">Location: Vancouver, Canada</li>
                <li className="details-item">Interests: Hiking, Rock climbing, Ice Skating</li>
              </ul>
              <h2 className="column-header">My Style</h2>
              <div className="style-box"> { GPTcolorsString } </div>
              <div className="style-box"> { GPTreasoning } </div>
            </div>
    
            {/* Right Column */}
            <div className="right-column">
              <h2 className="column-header">My Store</h2>
              <div className="store-box"></div>
              <h2 className="column-header">Addresses</h2>
              <div className="address-box"></div>
            </div>
          </div>
        </div>
    );
}
