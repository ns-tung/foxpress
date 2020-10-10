import React from 'react';

function PreloaderContainer() {
    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle" />
                    <div className="preloader-img pere-text">
                        <img className="img-fluid" src="img/logo/logo.svg" alt="FoxPress" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreloaderContainer;