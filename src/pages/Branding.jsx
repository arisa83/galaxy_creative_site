import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import './SubPage.css';

const Branding = () => {
    return (
        <div className="subpage">
            <div className="subpage-header branding-header">
                <h1 className="subpage-title text-display">BRANDING</h1>
                <p className="subpage-subtitle">THE SOUL</p>
            </div>

            <div className="container subpage-content">
                <div className="content-block">
                    <h2 className="text-display">NOT JUST A LOGO.</h2>
                    <p className="text-body">
                        私たちは「ロゴマーク」だけを作ることはありません。<br />
                        企業の歴史、哲学、そして未来への野望。<br />
                        すべてを蒸留し、一滴のインクに凝縮させます。<br />
                        それがGALAXY CREATIVEのブランディングです。<br />
                        視覚情報としての「強さ」だけでなく、<br />
                        心に焼き付く「熱量」をデザインします。
                    </p>
                </div>

                <Marquee text="IDENTITY FORGING • SOUL CRAFTING • FUTURE BUILDING • " speed={20} className="subpage-marquee" />

                <div className="case-study">
                    <h3 className="text-display">CASE STUDY: KYO-GEN</h3>
                    <div className="case-img-placeholder branding-case"></div>
                    <p className="case-desc">
                        次世代農業テック企業のトータルブランディング。<br />
                        「土」と「データ」の融合をテーマに、<br />
                        有機的かつデジタルなビジュアルアイデンティティを構築。<br />
                        採用応募数が前年比500%を記録。
                    </p>
                </div>

                <div className="back-link">
                    <Link to="/">← BACK TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default Branding;
