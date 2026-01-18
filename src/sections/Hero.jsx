import React from 'react';
import Marquee from '../components/Marquee';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-text">
                <Marquee text="SCOOP!!! GALAXY CREATIVE SCOOP!!!" speed={15} className="text-large text-display" />
                <Marquee text="NEW CREATION NEW VIBES NEW FUTURE" speed={20} direction="right" className="text-medium text-display outline-text" />
                <Marquee text="WE MAKE IT HAPPEN. WE MAKE IT POP." speed={18} className="text-large text-display" />
            </div>

            <div className="hero-content container">
                <h1 className="hero-title text-display">
                    <span className="bg-black text-white p-2 block-display transform-rotate-1">GALAXY</span>
                    <br />
                    <span className="bg-primary text-black p-2 block-display transform-rotate-2">CREATIVE</span>
                </h1>
                <p className="hero-subtitle bg-white p-2">
                    世界を騒がせるクリエイティブを、ここから。
                </p>
            </div>

            <div className="decoration-circle"></div>
            <div className="decoration-star"></div>
        </section>
    );
};

export default Hero;
