import React from 'react';
import '../styles/pages.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img className='footerLogo' src="/img/logo.svg" alt="CryptoGetExpo" />
                    <p>
                        CryptoGetExpo is a premier blockchain conference uniting influential figures and industry experts to shape the future of finance.
                    </p>
                </div>
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#About Us">About Us</a></li>
                        <li><a href="#Speakers">Speakers</a></li>
                        <li><a href="#Sponsors">Sponsors</a></li>
                        <li><a href="#Date">Event Details</a></li>
                    </ul>
                </div>
                <div className="footer-section info">
                    <h4>Event Highlights</h4>
                    <p>
                        - Over 30 countries participating<br />
                        - Networking opportunities with industry leaders<br />
                        - Discussions on cutting-edge financial technologies
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 CryptoGetExpo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
