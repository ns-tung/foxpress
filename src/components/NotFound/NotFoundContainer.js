import React from 'react';

function NotFoundContainer() {
    return (
        <main className="container">
            <div className="row py-5">
                <div className="col text-center">
                    <p className="display-4 mb-5">Ahhh! Cái này không có nha!!! <span role="img" aria-label="grinning face with sweat">😅</span></p>
                    <div className="row mb-5">
                        <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                            <img className="img-fluid" src="img/banner/dog.png" alt="cute dog" />
                        </div>
                    </div>
                    <a href="/" className="genric-btn foxpress circle">Về trang chủ</a>
                </div>
            </div>
        </main>
    )
}

export default NotFoundContainer;