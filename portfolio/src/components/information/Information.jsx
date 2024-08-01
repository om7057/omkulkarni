import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div id='home' className="information-container">
      <div className="image">
        <img src="https://res.cloudinary.com/domzgxu5n/image/upload/v1722417453/qpyuim84xu2rtlgfkwuc.jpg" alt="Your Name" className="profile-image" />
      </div>
      <div className="info-details">
        <h1>Name: Om Kulkarni</h1>
        <h2>Class: TY CSE</h2>
        <h2>College: WCE Sangli</h2>
        <h2>Email: Kulkarniom7057@gmail.com</h2>
        <h2>Contact Number: 7057406375</h2>
        <h2>Location: Sangli, Maharashtra, India</h2>
      </div>
    </div>
  );
}

export default Information;
