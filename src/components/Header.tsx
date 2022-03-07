import React from 'react';
import {NavLink} from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <NavLink to='/' className='header-link'>Home</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;