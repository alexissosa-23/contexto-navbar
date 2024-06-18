import React, { useState } from 'react';
import UserContext from '../context/UserContext';

const Wrapper = ({ children }) => {
    const [userName, setUserName] = useState("Bob Smith");

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
};

export default Wrapper;
