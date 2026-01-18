import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        title: 'BRANDING',
        description: 'ブランドの魂を形にする。ロゴから戦略まで、一貫した世界観を構築します。',
        shape: 'clip-corner-1',
        link: '/services/branding'
    },
    {
        title: 'WEB DESIGN',
        description: '視覚的インパクトと使いやすさの共存。記憶に残るデジタル体験を創造します。',
        shape: 'clip-corner-2',
        link: '/services/web'
    },
    {
        title: 'VIDEO',
        description: '一瞬で心を掴む映像表現。CM、MV、Web動画まで幅広く対応。',
        shape: 'clip-corner-3',
        link: '/services/video'
    },
    {
        title: 'EVENT',
        description: 'リアルとデジタルを融合させた、没入感のあるイベント空間をプロデュース。',
        shape: 'clip-corner-4',
        link: '/services/event'
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <h2 className="section-title text-display text-white">
                    WHAT <span className="highlight-neon">WE DO</span>
                </h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card ${service.shape}`}>
                            <div className="card-number text-display">0{index + 1}</div>
                            <h3 className="card-title text-display">{service.title}</h3>
                            <p className="card-desc">{service.description}</p>
                            <Link to={service.link}>
                                <button className="card-btn">MORE &#8594;</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
