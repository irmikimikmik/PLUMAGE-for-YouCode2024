import AppNavBar from "@/components/AppNavBar";
import styles from '../styles/profile.css';
import "../app/globals.css";


export default function Home() {
    return (
        <div className="profile-container">
            <AppNavBar/>
          <h1 className="column-header">Your Profile</h1>
          <div className="profile-grid">
            {/* Left Column */}
            <div className="left-column">
              <h2 className="column-header">Personal Information</h2>
              <ul className="details-list">
                <li className="details-item">Name:</li>
                <li className="details-item">Email:</li>
                <li className="details-item">Location:</li>
                <li className="details-item">Interests:</li>
              </ul>
              <h2 className="column-header">My Style</h2>
              <div className="style-box">

              </div>
              <div className="style-box">


              </div>
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
