import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title text-display">
                    <span className="highlight-text">WHO</span> WE ARE
                </h2>

                <div className="paper-stack">
                    <div className="paper paper-1">
                        <h3 className="paper-title">PASSION</h3>
                        <p>
                            私たちは常に情熱を持ってクリエイティブに取り組みます。
                            「楽しむこと」こそが最大のエネルギー源です。
                        </p>
                    </div>
                    <div className="paper paper-2">
                        <h3 className="paper-title">CREATION</h3>
                        <p>
                            既存の枠にとらわれない発想で、
                            新しい価値を創造し続けます。
                            破壊と再生のループ。
                        </p>
                    </div>
                    <div className="paper paper-3">
                        <h3 className="paper-title">FUTURE</h3>
                        <p>
                            テクノロジーとデザインの融合で、
                            まだ見ぬ未来を今、ここに描き出します。
                            GALAXY CREATIVEは止まりません。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
