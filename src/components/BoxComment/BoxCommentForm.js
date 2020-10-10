import React from 'react';

function BoxCommentForm() {
    return (
        <form className="form-contact contact_form mb-80" method="post" id="contactForm" noValidate="novalidate">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <input className="form-control error" name="name" id="name" type="text" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <input className="form-control error" name="email" id="email" type="email" placeholder="Email" />
                    </div>
                </div>
                {/* <div className="col-12">
                    <div className="form-group">
                        <input className="form-control error" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                    </div>
                </div> */}
                <div className="col-12">
                    <div className="form-group">
                        <textarea className="form-control h-100 error" name="message" id="message" cols={30} rows={9} placeholder="Enter Message" defaultValue={""} />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="w-100 button button-contactForm boxed-btn">Gửi</button>
            </div>
        </form>
    )
}

export default BoxCommentForm;