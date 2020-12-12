import React from "react";
import "../styles/style.css";

const Contact = () => (
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{ fontSize: 75 }}>Contact me</h1>
                </div>
            </div>
            <form className="gform pure-form pure-form-stacked" style={{ width: "100%" }} method="POST " action="https://script.google.com/macros/s/AKfycbx1A1BUYAavAioF8NtPPbs69y4yThwiVrrbj1pc/exec ">
                <div className="form-elements">
                    <fieldset className="pure-group ">
                        <label for="name ">Name: </label>
                        <input id="name " name="name " placeholder="What your Mom calls you " />
                    </fieldset>
                    <fieldset className="pure-group ">
                        <label for="message ">Message: </label>
                        <textarea id="message " name="message " rows="10 " placeholder="Tell me what 's on your mind..."></textarea>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset className="pure-group">
                                <label for="email">Your Email Address:</label>
                                <input id="email" name="email" type="email" required placeholder="your.name@email.com" />
                            </fieldset>
                            <fieldset className="pure-group honeypot-field">
                                <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
                                <input id="honeypot" type="text" name="honeypot" value="" />
                            </fieldset>
                        </div>
                        <div className="col-md-6">
                            <button className="button-success pure-button button-xlarge">
                        <i className="fa fa-paper-plane"></i>&nbsp;Send</button>
                        </div>
                    </div>
                    <div style={{display: "none"}} className="thankyou_message">
                        <h2><em>Thanks</em>! I will get back to you soon!</h2>
                    </div>
                </div>
            </form>
    </div>
);

export default Contact;
