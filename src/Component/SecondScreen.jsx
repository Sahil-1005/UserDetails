import React, { useState } from 'react';
import './SecondScreen.css';

const SecondScreen = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = () => {
        onSubmit({ name, age, address });
    };

    return (
        <div className="container">
            <h1>User Details</h1>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label>Address: </label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SecondScreen;
