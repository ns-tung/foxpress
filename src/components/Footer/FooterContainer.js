import React from 'react';

function FooterContainer() {
    return (
        <footer>
            {/* Footer Start*/}
            <div className="footer-area footer-padding fix">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                            <div className="single-footer-caption">
                                <div className="single-footer-caption">
                                    {/* logo */}
                                    <div className="footer-logo">
                                        <a href="/"><img src="img/logo/logo-footer.svg" alt="" /></a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for sectetuer.</p>
                                        </div>
                                    </div>
                                    {/* social */}
                                    <div className="footer-social">
                                        <a href="/"><i className="fab fa-twitter" /></a>
                                        <a href="/"><i className="fab fa-instagram" /></a>
                                        <a href="/"><i className="fab fa-pinterest-p" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mt-60">
                                <div className="footer-tittle">
                                    <h4>Newsletter</h4>
                                    <p>Heaven fruitful doesn't over les idays appear creeping</p>
                                    {/* Form */}
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                                                <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><img src="img/logo/form-iocn.png" alt="" /></button>
                                                </div>
                                                <div className="mt-10 info" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                            <div className="single-footer-caption mb-50 mt-60">
                                <div className="footer-tittle">
                                    <h4>Instagram Feed</h4>
                                </div>
                                <div className="instagram-gellay">
                                    <ul className="insta-feed">
                                        <li><a href="/"><img src="img/post/instra1.jpg" alt="" /></a></li>
                                        <li><a href="/"><img src="img/post/instra2.jpg" alt="" /></a></li>
                                        <li><a href="/"><img src="img/post/instra3.jpg" alt="" /></a></li>
                                        <li><a href="/"><img src="img/post/instra4.jpg" alt="" /></a></li>
                                        <li><a href="/"><img src="img/post/instra5.jpg" alt="" /></a></li>
                                        <li><a href="/"><img src="img/post/instra6.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-bottom aera */}
            <div className="footer-bottom-area">
                <div className="footer-border">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="footer-copy-right text-center text-md-left">
                                    <p className="mb-3 m-md-0">
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    
                                        Made with <i className="fal fa-heart" /> by <a href="https://colorlib.com/wp/template/aznews/" target="_blank" rel="noopener noreferrer">Colorlib</a>
    
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="footer-menu text-center text-md-right">
                                    <ul>
                                        <li><a href="/">Terms of use</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End*/}
        </footer>
    )
}

export default FooterContainer;