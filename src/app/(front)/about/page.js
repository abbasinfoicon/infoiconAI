'use client'
import Breadcrumb from '@/app/components/Breadcrumb'
import About from '@/app/components/home/About'
import React from 'react'
import Slider from "react-slick";

const AboutPage = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Breadcrumb title="About us" content="Email us with any questions, we would be happy to answer your question." image="contact-vector.svg" />
            <About pg="page" />

            <section className="testimonial-section section-b-space">
                <div className="container">
                    <div className="title-basic">
                        <h2>Check out how much Megabot is loved by our users!</h2>
                    </div>

                    <div className="testimonialSlider">
                        <Slider {...settings}>
                            <div className="swiper-slide">
                                <div className="testimonial-box">
                                    <div className="content-sec">
                                        <div className="quote-img">
                                            <img src="/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                                            <img src="/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                                        </div>
                                        <p> The quality of the generated text is impressive, and
                                            it saves me so much time and effort. Highly recommended!
                                        </p>
                                    </div>
                                    <div className="small-circle"><span></span></div>
                                    <div className="large-circle"><span></span></div>
                                    <div className="avtar-img">
                                        <img src="/assets/images/user/1.jpg" className="img-fluid" alt="user" />
                                    </div>
                                    <h4>Marvin McKinney</h4>
                                    <h5>Content writer</h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-box">
                                    <div className="content-sec">
                                        <div className="quote-img">
                                            <img src="/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                                            <img src="/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                                        </div>
                                        <p>As a marketer, I'm always looking for ways to streamline my work. The AI
                                            Tool has been a fantastic addition to my toolkit. It helps me come up with creative
                                            ideas!
                                        </p>
                                    </div>
                                    <div className="small-circle"><span></span></div>
                                    <div className="large-circle"><span></span></div>
                                    <div className="avtar-img">
                                        <img src="/assets/images/user/2.jpg" className="img-fluid" alt="user" />
                                    </div>
                                    <h4>Marvin McKinney</h4>
                                    <h5>Content writer</h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-box">
                                    <div className="content-sec">
                                        <div className="quote-img">
                                            <img src="/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                                            <img src="/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                                        </div>
                                        <p>I was skeptical about using AI for content generation, but after trying out the AI
                                            Generation Tool, I was pleasantly surprised.
                                        </p>
                                    </div>
                                    <div className="small-circle"><span></span></div>
                                    <div className="large-circle"><span></span></div>
                                    <div className="avtar-img">
                                        <img src="/assets/images/user/3.jpg" className="img-fluid" alt="user" />
                                    </div>
                                    <h4>Marvin McKinney</h4>
                                    <h5>Content writer</h5>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-box">
                                    <div className="content-sec">
                                        <div className="quote-img">
                                            <img src="/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                                            <img src="/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                                        </div>
                                        <p>The AI Generation Tool has revolutionized the way I write. Whether I need help with
                                            brainstorming ideas or fleshing out drafts.
                                        </p>
                                    </div>
                                    <div className="small-circle"><span></span></div>
                                    <div className="large-circle"><span></span></div>
                                    <div className="avtar-img">
                                        <img src="/assets/images/user/3.jpg" className="img-fluid" alt="user" />
                                    </div>
                                    <h4>Marvin McKinney</h4>
                                    <h5>Content writer</h5>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage