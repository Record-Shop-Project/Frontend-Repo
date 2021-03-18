import React from 'react'


const Footer = ()=> {
    const date = new Date().getFullYear();

    return (
        <footer>
            <p>&copy;AEMT_{date}</p>
        </footer>
    );
};

export default Footer;