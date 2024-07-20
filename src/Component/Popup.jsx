import React from 'react';
import './Popup.css';

const Popup = ({ details, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>Details Submitted</h1>
                <p>Email: {details.email}</p>
                <p>Mobile: {details.mobile}</p>
                <p>Name: {details.name}</p>
                <p>Age: {details.age}</p>
                <p>Address: {details.address}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
