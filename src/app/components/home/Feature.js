import Link from 'next/link'
import React from 'react'
import { ArrowRight, ArrowUp } from 'react-bootstrap-icons'

const Feature = () => {
    return (
        <section className="feature-section section-b-space">
            <div className="bg-effect">
                <img src="assets/images/feature.gif" className="img-fluid feature-left" alt="" />
                <img src="assets/images/feature.gif" className="img-fluid feature-right" alt="" />
                <img src="assets/images/feature-bg.png" className="img-fluid feature-bg" alt="" />
                <span className="round-effect"></span>
            </div>
            <div className="container">
                <div className="title-basic">
                    <h2>Unleash limitless potential &
                        versatile features for every need</h2>
                </div>
                <div className="featureSlider">
                    <div className="feature-wrapper">
                        <div className="row g-xxl-5 g-4">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/message.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/message-bold.svg"
                                                className="img-fluid bold-icon" alt="" />
                                        </div>
                                        <h3>Ask anything</h3>
                                    </div>
                                    <h4>Unlock the power of curiosity, Ask anything and let our AI unravel the answers
                                        for you!</h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/code.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/code-bold.svg" className="img-fluid bold-icon"
                                                alt="" />
                                        </div>
                                        <h3>Code generator</h3>
                                    </div>
                                    <h4>Discover the power of technology, making your coding dreams a reality.
                                    </h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/play.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/play-bold.svg" className="img-fluid bold-icon"
                                                alt="" />
                                        </div>
                                        <h3>ASO expert</h3>
                                    </div>
                                    <h4>Boost your app's success and take over the app stores and win the attention of
                                        millions.</h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/insta.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/insta-bold.svg" className="img-fluid bold-icon"
                                                alt="" />
                                        </div>
                                        <h3>Insta caption</h3>
                                    </div>
                                    <h4>One caption at a time, unveiling the endless potential of AI</h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/mail.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/mail-bold.svg" className="img-fluid bold-icon"
                                                alt="" />
                                        </div>
                                        <h3>Email generator</h3>
                                    </div>
                                    <h4>Generating emails that captivates and expresses with brilliance.
                                    </h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/hashtag.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/hashtag-bold.svg"
                                                className="img-fluid bold-icon" alt="" />
                                        </div>
                                        <h3>Hashtag writer</h3>
                                    </div>
                                    <h4>Boost your content journey by utilising the power of hashtags!
                                    </h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/box.svg" className="img-fluid outline-icon"
                                                alt="" />
                                            <img src="/assets/svg/box-bold.svg" className="img-fluid bold-icon"
                                                alt="" />
                                        </div>
                                        <h3>E-commerce</h3>
                                    </div>
                                    <h4>Promoting sales, enhancing customer experience, and redefining product
                                        recommendations.</h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <div className="feature-top">
                                        <div className="feature-icon">
                                            <img src="/assets/svg/marketing.svg"
                                                className="img-fluid outline-icon" alt="" />
                                            <img src="/assets/svg/marketing-bold.svg"
                                                className="img-fluid bold-icon" alt="" />
                                        </div>
                                        <h3>Ads & marketing</h3>
                                    </div>
                                    <h4>Tap into data-driven facts, target the right clientele, and maximize ad
                                        performance.</h4>
                                    <div className="link-overflow"><Link href="/" className='flex items-center'>Read more <ArrowRight className='iconsax' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination-effect">
                <Link className="btn-arrow" href="#">
                    <div className="icon-arrow"><ArrowUp className="iconsax" /></div>View all
                </Link>
            </div>
        </section>
    )
}

export default Feature