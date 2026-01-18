import React from 'react';
import './Marquee.css';

const Marquee = ({ text, direction = 'left', speed = 20, className = '' }) => {
  return (
    <div className={`marquee-container ${className}`}>
      <div 
        className="marquee-content" 
        style={{ 
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s`
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div 
        className="marquee-content" 
        aria-hidden="true"
        style={{ 
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s`
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
