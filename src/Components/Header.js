import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../Style/Style.css';
import '../Style/Responsive.css';

const Header = () => {
    return (
        <div className='header'>

            <div className="header-info">
                <p>+91 8617565583</p>
                <p>hellosouvickk@gmail.com</p>
            </div>
            <div className="header-icon">
                <FaTwitter />
                <FaLinkedinIn />
                <FaFacebookF />
                <FaInstagram />
            </div>

        </div>
    )
}

export default Header