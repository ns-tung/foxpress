import React from 'react';

function NotFoundContainer() {
    return (
        <main className="my-5">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col text-center">
                        <p className="display-4 mb-30">Ahhh! Cái này không có nha!!! <span role="img" aria-label="grinning face with sweat">😅</span></p>
                        <a href="/" className="genric-btn foxpress circle">Về trang chủ</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFoundContainer;