import React from 'react';
import '../styles/logo.css';

const Logo: React.FC = () => {
    return (
        // <div>
        //     <h1 className="logo-heading">Wavelength</h1>
        // </div>
        <div>
            <img
                alt="Wavelength Logo"
                src={require('../static/logo.svg')}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            WAVELENGTH
        </div>
    );
};

export default Logo;
