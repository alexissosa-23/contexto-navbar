import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Navbar = () => {
    const { userName } = useContext(UserContext);

    return (
        <div style={{ backgroundColor: '#9b59b6', padding: '1em', color: 'white' }}>
            Hi {userName}!
        </div>
    );
};

export default Navbar;
