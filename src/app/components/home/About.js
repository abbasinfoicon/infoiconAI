import React from 'react'

const About = () => {
    return (
        <>
            <section className="about-section section-b-space section-mb-space">
                <div className="bg-effect"></div>
                <div className="container">
                    <div className="row g-md-5 g-4">
                        <div className="col-lg-6 order-lg-0 order-1">
                            <div className="about-content">
                                <div>
                                    <div className="title">
                                        <span className="number-pattern">01.</span>
                                        <h2>Compatible with multiple documents</h2>
                                    </div>
                                    <p>Extracts relevant citations to provide accurate response to your audience</p>
                                    <ul>
                                        <li><img src="/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Simple and flexible format for storing and sharing information.</li>
                                        <li><img src="/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Secure, portable, and widely used for documents and reports.</li>
                                        <li><img src="/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Lightweight format for structured data and easy spreadsheet import.</li>
                                        <li><img src="/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Rich text document format with advanced editing capabilities.</li>
                                        <li><img src="/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Lightweight data format for APIs and structured information.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/assets/svg/1.svg" className="img-fluid" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About