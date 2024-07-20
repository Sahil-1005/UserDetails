import React, { useState } from 'react';
import './FirstScreen.css';

const FirstScreen = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMobile = (mobile) => {
        const regex = /^[0-9]{10}$/;
        return regex.test(mobile);
    };

    const handleNext = () => {
        if (!validateEmail(email)) {
            setError('Invalid email');
            return;
        }
        if (!validateMobile(mobile)) {
            setError('Invalid mobile number');
            return;
        }
        setError('');
        onNext({ email, mobile });
    };

    return (
        <div className="container">
            <h1>User Details</h1>
            <div>
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Mobile: </label>
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default FirstScreen;
