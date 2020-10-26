import React from 'react';


export function Contact(){
    return(
        <div className="contact">
            <div className="contact-title pt-4">
                <p>Contacts</p>
            </div>
            <div className="row ">
                <div className="contact-form col-5 offset-2 ">
                <form>
                    <input placeholder="Your name:" />
                    <input placeholder="Your email:" />
                    <input placeholder="Your message:" className="contact-form-message"/>
                </form>
                    <div className="contact-form-button d-flex justify-content-center">
                        <span>Send</span>
                    </div>
                </div>
                <div className="contact-data col-4">
                    <div className="contact-data-item ">
                      <span>Skype_login</span>
                    </div>
                    <div className="contact-data-item ">
                        <span>3520258645</span>
                    </div>
                    <div className="contact-data-item ">
                        <span>email@gmail.com</span>
                    </div>
                    <div className="contact-data-item ">
                        <span>+380552368545</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
