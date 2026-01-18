import React from 'react';
import Marquee from '../components/Marquee';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="contact-marquee-wrapper">
                <Marquee text="CONTACT US FOR NEW PROJECTS • JOIN OUR TEAM • LET'S MAKE MAGIC • " speed={25} className="contact-marquee" />
            </div>

            <div className="container footer-content">
                <div className="footer-logo">
                    <h2 className="text-display">GALAXY<br />CREATIVE</h2>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>SITEMAP</h3>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>NEWS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>SOCIAL</h3>
                        <ul>
                            <li>INSTAGRAM</li>
                            <li>X (TWITTER)</li>
                            <li>YOUTUBE</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-info">
                    <p>
                        〒107-0062<br />
                        東京都港区南青山 5-10-1<br />
                        GALAXY BLDG. 3F
                    </p>
                    <a href="mailto:hello@galaxy-creative.jp" className="footer-email">hello@galaxy-creative.jp</a>
                </div>
            </div>

            <div className="copyright">
                &copy; 2025 GALAXY CREATIVE DO. NOT. COPY.
            </div>
        </footer>
    );
};

export default Footer;
