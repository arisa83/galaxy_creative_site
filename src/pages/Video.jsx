import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import './SubPage.css';

const Video = () => {
    return (
        <div className="subpage">
            <div className="subpage-header video-header">
                <h1 className="subpage-title text-display">VIDEO</h1>
                <p className="subpage-subtitle">THE MOTION</p>
            </div>

            <div className="container subpage-content">
                <div className="content-block">
                    <h2 className="text-display">VISUAL NOISE.</h2>
                    <p className="text-body">
                        1秒で心を掴み、3秒で世界を変える。<br />
                        GALAXY CREATIVEの映像は、「綺麗」なだけではありません。<br />
                        ノイズ、グリッチ、混沌。<br />
                        それらをコントロールし、視聴者の脳裏に直接アクセスする。<br />
                        網膜をハックする映像体験を。
                    </p>
                </div>

                <Marquee text="CINEMATOGRAPHY • VISUAL FX • MOTION GRAPHICS • " speed={15} className="subpage-marquee" style={{ background: '#fff', color: '#000' }} />

                <div className="case-study">
                    <h3 className="text-display">CASE STUDY: CHAOS THEORY</h3>
                    <div className="case-img-placeholder video-case"></div>
                    <p className="case-desc">
                        アパレルブランドのコンセプトムービー。<br />
                        8mmフィルムのアナログ質感と、<br />
                        最新のAI生成映像をコラージュ。<br />
                        「過去と未来の衝突」を可視化した話題作。
                    </p>
                </div>

                <div className="back-link">
                    <Link to="/">← BACK TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default Video;
