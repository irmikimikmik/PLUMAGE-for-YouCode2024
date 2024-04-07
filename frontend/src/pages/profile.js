import AppNavBar from "@/components/AppNavBar";
import styles from "../styles/profile.css";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Visa from "../../public/visa.png";
const userData = require("../../public/mocks/userProfiles.json");
import Image from "next/image";
let GPTcolorsString;
let GPTreasoning;
let GPTcolors;

function fetchChatPT4VisionOutput() {
  fetch("http://localhost:3001/openAIEndpoint")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("response: " + JSON.stringify(data));
      // Handle the successful response data here
      GPTcolors = data.colors;
      GPTreasoning = data.reasoning;
      const GPTcolorsString = arrayToString(data.colors);

      console.log("GPTcolors: " + GPTcolors);
      console.log("GPTreasoning: " + GPTreasoning);
      console.log("GPTcolorsString: " + GPTcolorsString);
    })
    .catch((error) => {
      console.error("Fetching ChatGPT-4 Vision output failed:", error);
      // Handle the error case here
      // You might want to set an error state or rethrow the error
    });
=======
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
            GPTcolorsString = arrayToString(data.colors);
            
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
    return ""; // Return an empty string for invalid input or empty array
  }

  // Join array elements with a comma and a space, and add a period at the end
  return array.join(", ") + ".";
}

export default function Profile() {
  const [GPTcolorsString, setGPTcolorsString] = useState("");
  const [GPTreasoning, setGPTreasoning] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/openAIEndpoint")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Set the state with the fetched data
        setGPTcolorsString(arrayToString(data.colors));
        setGPTreasoning(data.reasoning);
      })
      .catch((error) => {
        console.error("Fetching ChatGPT-4 Vision output failed:", error);
        // Optionally update state to indicate the error
      });
  }, []);

  // fetchChatPT4VisionOutput();

  return (
    <div className="profile-container">
      <AppNavBar />
      <h1 className="column-header">Your Profile</h1>
      <div className="grid grid-cols-2 w-full mt-40 gap-x-14 pb-10">
        {/* Left Column */}
        <div className="space-y-9">
          <h2 className="space-y-9 text-left">Personal Information</h2>
          <div className="px-20">
            <ul className="space-y-3.5">
              <li className="details-item">Name: {userData[0].username}</li>
              <li className="details-item">Email: {userData[0].email}</li>
              <li className="details-item">Location: Portland, OR, Canada</li>
              <li className="details-item">
                Interests: Trail running, hiking, camping
              </li>
            </ul>
          </div>
          <h2 className="space-y-9 text-left">My Style</h2>
          <div className="style-box place-content-center px-4">
            <h2 className="text-base text-left">Your color story:</h2>
            {GPTcolorsString}{" "}
          </div>
          <div className="style-box place-content-center text-sm px-4">
            {" "}
            {GPTreasoning}{" "}
          </div>
        </div>
        {/* Right Column */}
        <div className="space-y-9">
          <div className="space-y-3.5">
            <h2 className="space-y-9 text-left">My Store</h2>
            <div className="store-box place-content-center">
              <p className="text-sm font-bold">Arc'teryx Portland Store</p>
              <p className="text-sm">
                605 NW 23rd Ave, Portland, OR 97210, United States
              </p>
            </div>
          </div>
          <div className="space-y-3.5">
            <h2 className="space-y-9 text-left">Addresses</h2>
            <div className="address-box place-content-center">
              <p className="text-sm">
                605 NW 23rd Ave, Portland, OR 97210, United States
              </p>
            </div>
          </div>
          <div className="space-y-3.5">
            <div className="flex space-x-4 align-middle">
              <h2 className="space-y-9 text-left">Payment Methods</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <g clip-path="url(#clip0_33_5428)">
                  <path
                    d="M16.9349 4.99128L13.9999 2.04128C13.806 1.84832 13.5435 1.73999 13.2699 1.73999C12.9963 1.73999 12.7339 1.84832 12.5399 2.04128L2.13491 12.4313L1.18491 16.5313C1.15213 16.6812 1.15326 16.8365 1.18819 16.9859C1.22313 17.1352 1.291 17.2749 1.38684 17.3947C1.48268 17.5145 1.60407 17.6114 1.74214 17.6783C1.88022 17.7452 2.03149 17.7804 2.18491 17.7813C2.25639 17.7885 2.32842 17.7885 2.39991 17.7813L6.54491 16.8313L16.9349 6.45128C17.1279 6.25734 17.2362 5.99487 17.2362 5.72128C17.2362 5.44769 17.1279 5.18523 16.9349 4.99128ZM6.04491 15.9313L2.15991 16.7463L3.04491 12.9363L10.8299 5.18128L13.8299 8.18128L6.04491 15.9313ZM14.4999 7.45628L11.4999 4.45628L13.2399 2.72628L16.1899 5.72628L14.4999 7.45628Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_33_5428">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 0.831299)"
                    />
                  </clipPath>
                </defs>
              </svg>
=======
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
                <li className="details-item">Interests: Hiking, Rock climbing</li>
              </ul>
              <h2 className="column-header">My Style</h2>
              <div className="style-box"> { GPTcolorsString } </div>
              <div className="style-box"> { GPTreasoning } </div>
            </div>
            <div className="address-box place-content-center px-4">
              <div className="flex space-x-4">
                <p className="text-sm">Jin Lee</p>
                <p className="text-sm text-gray-300">*1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
