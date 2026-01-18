import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import './SubPage.css';

const WebDesign = () => {
    return (
        <div className="subpage">
            <div className="subpage-header web-header">
                <h1 className="subpage-title text-display glitched">WEB DESIGN</h1>
                <p className="subpage-subtitle">THE SYSTEM</p>
            </div>

            <div className="container subpage-content">
                <div className="content-block">
                    <h2 className="text-display">DIGITAL ARCHITECTURE.</h2>
                    <p className="text-body">
                        ウェブサイトは、企業の「デジタル本社ビル」です。<br />
                        訪問者を迷わせず、しかし驚きを与える。<br />
                        機能性と芸術性の極限のバランス。<br />
                        GALAXY CREATIVEは、呼吸するウェブサイトを作ります。<br />
                        ユーザーの行動を予測し、先回りするインターフェース。<br />
                        それはもはや、生き物です。
                    </p>
                </div>

                <Marquee text="UI/UX REVOLUTION • DIGITAL ARCHITECTURE • IMMERSIVE WEB • " speed={25} direction="right" className="subpage-marquee web-marquee" />

                <div className="case-study">
                    <h3 className="text-display">CASE STUDY: NEON DIVE</h3>
                    <div className="case-img-placeholder web-case"></div>
                    <p className="case-desc">
                        没入型Eコマースプラットフォームの構築。<br />
                        VR技術を用いずに、ブラウザだけで3D空間のような<br />
                        ショッピング体験を実現。<br />
                        滞在時間は平均の3倍に。
                    </p>
                </div>

                <div className="back-link">
                    <Link to="/">← BACK TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default WebDesign;
