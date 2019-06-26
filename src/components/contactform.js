import React from 'react'

import { Field, reduxForm } from 'redux-form'

class ContactForm extends React.Component {
    render() {
        return (
            <div className="content-area">
                <div className="contact-heading" align="center">
                    <h1>Contact me</h1>
                </div>
                <div className="contactForm">
                    <form>
                        <div className="client-details">
                            <h2>Your Details</h2>
                            <p>Let me know how to get back to you.</p>
                        </div>
                        <div className="contact-item">
                            <label>First Name</label>
                            <span aria-hidden="true" role="presentation" class="field_required" style={{ color: "#ee0000" }}>*</span>

                            <div>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div className="contact-item">
                            <label>Last Name</label>
                            <span aria-hidden="true" role="presentation" class="field_required" style={{ color: "#ee0000" }}>*</span>
                            <div>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="contact-item">
                            <label>Email</label>
                            <span aria-hidden="true" role="presentation" class="field_required" style={{ color: "#ee0000" }}>*</span>
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>



                        <div className="contact-item">
                            <label>Comments / Questions</label>
                            <div>
                                <Field name="notes" component="textarea" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" >
                                Send Message
        </button>

                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(ContactForm)