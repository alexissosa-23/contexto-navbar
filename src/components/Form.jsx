import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Form = () => {
    const { userName, setUserName } = useContext(UserContext);

    return (
        <div>
            <label>Your Name: </label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
};

export default Form;
