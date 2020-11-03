import React from 'react';

function SideBarContainer() {
    return (
        <div className="about-area position-sticky">
            {/* Section Tittle */}
            <div className="section-tittle mb-30">
                <h3>Follow Us</h3>
            </div>
            {/* Flow Socail */}
            <div className="single-follow mb-30">
                <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="/"><img className="img-fluid" src="img/news/icon-fb.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="/"><img className="img-fluid" src="img/news/icon-tw.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="/"><img className="img-fluid" src="img/news/icon-ins.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                            <a href="/"><img className="img-fluid" src="img/news/icon-yo.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                            <span>8,045</span>
                            <p>Fans</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Poster */}
            <div className="news-poster d-none d-md-block">
                <img className="img-fluid" src="img/news/news_card.jpg" alt="" />
            </div>
        </div>
    )
}

export default SideBarContainer;