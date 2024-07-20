import React, { useState, useEffect } from 'react';
import './RegisteredUser.css';
import { getFromLocalStorage,saveToLocalStorage } from './localStorage';

const RegisteredUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const registeredUsers = getFromLocalStorage('users') || [];
        setUsers(registeredUsers);
    }, []);

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        saveToLocalStorage('users', updatedUsers);
    };

    const handleEdit = (index) => {
        const user = users[index];
        // Handle edit functionality
    };

    return (
        <div className="container">
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <p>{user.name}</p>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegisteredUsers;
