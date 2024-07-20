// src/App.js
import { useState } from 'react';
import FirstScreen from './Component/FirstScreen';
import SecondScreen from './Component/SecondScreen';
import Popup from './Component/Popup';
import RegisteredUsers from './Component/RegisteredUser';
import './App.css'

import { saveToLocalStorage,getFromLocalStorage } from './Component/localStorage';
const App = () => {
    const [step, setStep] = useState(1);
    const [userDetails, setUserDetails] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    const handleNext = (details) => {
      setUserDetails((prev) => ({ ...prev, ...details }));
      setStep(2);
  };

  const handleSubmit = (details) => {
      const completeDetails = { ...userDetails, ...details };
      const users = getFromLocalStorage('users') || [];
      users.push(completeDetails);
      saveToLocalStorage('users', users);
      setUserDetails(completeDetails);
      setShowPopup(true);
  };

  const handleClosePopup = () => {
      setShowPopup(false);
      setStep(1);
  };

  const showRegisteredUsers = () => {
      setShowUsers(true);
  };

    return (
      <div>
      <header>
          <h1>User Details</h1>
          <button onClick={showRegisteredUsers}>Show Registered Users</button>
      </header>
      {!showUsers && step === 1 && <FirstScreen onNext={handleNext} />}
      {!showUsers && step === 2 && <SecondScreen onSubmit={handleSubmit} />}
      {!showUsers && showPopup && <Popup details={userDetails} onClose={handleClosePopup} />}
      {showUsers && <RegisteredUsers />}
  </div>
    );
};

export default App;
