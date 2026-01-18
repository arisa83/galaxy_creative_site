import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import './SubPage.css';

const Event = () => {
    return (
        <div className="subpage">
            <div className="subpage-header event-header">
                <h1 className="subpage-title text-display">EVENT</h1>
                <p className="subpage-subtitle">THE SPACE</p>
            </div>

            <div className="container subpage-content">
                <div className="content-block">
                    <h2 className="text-display">PHYSICAL HACKING.</h2>
                    <p className="text-body">
                        空間そのものをメディアにする。<br />
                        光、音、プロジェクションマッピング。<br />
                        デジタル領域で培った演出力を、リアルな場に爆発させる。<br />
                        GALAXY CREATIVEのイベントは、「参加」ではなく「体験」です。<br />
                        その場所でしか味わえない、一生の記憶を刻みます。
                    </p>
                </div>

                <Marquee text="SPATIAL DESIGN • INSTALLATION • LIGHTING ARCHITECTURE • " speed={30} direction="right" className="subpage-marquee" style={{ color: 'var(--color-secondary)' }} />

                <div className="case-study">
                    <h3 className="text-display">CASE STUDY: TOKYO CORE NIGHT</h3>
                    <div className="case-img-placeholder event-case"></div>
                    <p className="case-desc">
                        都市開発プロジェクトのオープニングレセプション。<br />
                        建設中のビルそのものをスクリーン化し、<br />
                        街全体を巻き込んだ光のインスタレーションを実施。<br />
                        SNS総再生回数1,000万回突破。
                    </p>
                </div>

                <div className="back-link">
                    <Link to="/">← BACK TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default Event;
