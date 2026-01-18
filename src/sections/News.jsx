import React from 'react';
import './News.css';

const newsItems = [
    { date: '2025.10.15', category: 'EVENT', title: '「GALAXY EXPO 2025」開催決定！', icon: '🎪' },
    { date: '2025.09.28', category: 'AWARD', title: '国際デザインアワードで金賞を受賞しました', icon: '🏆' },
    { date: '2025.09.01', category: 'RECRUIT', title: '2026年度 新卒採用のエントリーを開始しました', icon: '👫' },
    { date: '2025.08.20', category: 'WORK', title: '大手飲料メーカーの夏キャンペーンCMを担当', icon: '🎬' },
];

const News = () => {
    return (
        <section className="news-section">
            <div className="container">
                <h2 className="section-title text-display">
                    LATEST <span className="highlight-bg">NEWS</span>
                </h2>

                <ul className="news-list">
                    {newsItems.map((item, index) => (
                        <li key={index} className="news-item">
                            <span className="news-icon" role="img" aria-label="icon">{item.icon}</span>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-date text-display">{item.date}</span>
                                    <span className={`news-tag tag-${item.category.toLowerCase()}`}>{item.category}</span>
                                </div>
                                <h3 className="news-title">{item.title}</h3>
                            </div>
                            <span className="arrow-icon">➔</span>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-4">
                    <button className="view-all-btn">VIEW ALL NEWS</button>
                </div>
            </div>
        </section>
    );
};

export default News;
