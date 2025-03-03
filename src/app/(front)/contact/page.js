import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Breadcrumb title="Contact us" content="Email us with any questions, we would be happy to answer your question." image="contact-vector.svg" />

            <section className="contact-section pb-md-5 pb-0">
                <div className="container">
                    <ul className="contact-box">
                        <li>
                            <div className="contact-icon">
                                <img src="/assets/svg/contact/message.svg" className="img-fluid" alt="message" />
                            </div>
                            <h3>Mail id</h3>
                            <h4>sales@infoicontechnologies.com</h4>
                            <h4>info@infoiconai.com</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="/assets/svg/contact/contact.svg" className="img-fluid" alt="message" />
                            </div>
                            <h3>Contact no.</h3>
                            <h4>+91-120-413-9663</h4>
                            <h4>+1 31 5688 7243</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="/assets/svg/contact/route.svg" className="img-fluid" alt="message" />
                            </div>
                            <h3>Address 1</h3>
                            <h4>E-32, Sector 8, Noida (U.P.)</h4>
                            <h4>India - 201301</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="/assets/svg/contact/address.svg" className="img-fluid" alt="message" />
                            </div>
                            <h3>Address 2</h3>
                            <h4>1132, 11th Floor, I-Thum Tower B,</h4>
                            <h4>Sector-62, Noida-201301 India</h4>
                        </li>
                    </ul>
                    <div className="contact-details">
                        <div className="row g-lg-5 g-4">
                            <div className="col-xl-7 col-lg-6">
                                <form className="auth-form">
                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="email" className="form-control" id="name" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                            <input type="email" className="form-control" id="phoneNumber" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label">Additional Message</label>
                                            <textarea className="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <a href="" data-cursor="pointer" className="btn-solid">Send message</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="map-sec">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1706037524955!2d77.32307587610867!3d28.59465833579856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50681005277%3A0x765237187ebbcbd9!2sInfoicon%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1689576693363!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact