import Link from 'next/link'
import React from 'react'
import { ArrowUp } from 'react-bootstrap-icons'

const Service = () => {
    return (
        <div className="service-section section-b-space">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row g-4 service-row">
                            <div className="col-sm-6">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src="/assets/svg/copy.svg" className="img-fluid outline-icon" alt="" />
                                        <img src="/assets/svg/copy-bold.svg" className="img-fluid bold-icon" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3><img src="/assets/svg/service-title.svg" alt="effect" className="img-fluid" />Copy
                                            writer</h3>
                                        <p>Unleash the power of AI to effortlessly compelling content that captivates
                                            and converts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src="/assets/svg/graph.svg" className="img-fluid outline-icon" alt="" />
                                        <img src="/assets/svg/graph-bold.svg" className="img-fluid bold-icon" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3><img src="/assets/svg/service-title.svg" alt="effect"
                                            className="img-fluid" />Digital
                                            marketers</h3>
                                        <p>Accelerate your marketing and take over the digital landscape</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src="/assets/svg/search.svg" className="img-fluid outline-icon" alt="" />
                                        <img src="/assets/svg/search-bold.svg" className="img-fluid bold-icon" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3><img src="/assets/svg/service-title.svg" alt="effect" className="img-fluid" />SEO
                                            Sepcialist</h3>
                                        <p>Generate more engaging content to skyrocket your website’s visibility
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src="/assets/svg/text.svg" className="img-fluid outline-icon" alt="" />
                                        <img src="/assets/svg/text-bold.svg" className="img-fluid bold-icon" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3><img src="/assets/svg/service-title.svg" alt="effect"
                                            className="img-fluid" />Content
                                            marker</h3>
                                        <p>Reinvent your content marketing and captivate your audience like never before.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-info">
                            <div>
                                <div className="title">
                                    <h2>Unlike any other widgets</h2>
                                    <h3>We offer a diverse set of features tailored to elevate your brand's presence</h3>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, maxime incidunt. Minima distinctio quod voluptatum. Amet necessitatibus aut, culpa quos reiciendis sequi expedita quisquam voluptatum unde modi doloremque, corporis beatae!</p>
                                <Link className="btn-arrow" href="#">
                                    <div className="icon-arrow"><ArrowUp className="iconsax" /></div>View all
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service