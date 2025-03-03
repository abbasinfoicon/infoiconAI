import Breadcrumb from '@/app/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const Blog = () => {
    return (
        <>
            <Breadcrumb title="Latest Blog" content="Discover the most recent blogs about artificial intelligence here." image="contact-vector.svg" />

            <section className="ratio2_3">
                <div className="container">
                    <div className="row g-lg-5 g-4">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/1.jpg" className="img-fluid" alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}>ChatGPT: Revolutionizing Conversational AI with GPT-3.5</Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/2.jpg" className="img-fluid"
                                        alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}> Empowering Conversations with Advanced AI Capabilities </Link>
                                    <ul>
                                        <li>14 march 2023</li>
                                        <li>5 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/3.jpg" className="img-fluid" alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}> Enabling Intelligent Conversations with Cutting-Edge AI Technology </Link>
                                    <ul>
                                        <li>20 march 2023</li>
                                        <li>4 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/4.jpg" className="img-fluid"
                                        alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}>Unleashing the Potential of Conversational AI</Link>
                                    <ul>
                                        <li>21 march 2023</li>
                                        <li>2 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/5.jpg" className="img-fluid" alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}>Unlocking the Power of Conversational AI
                                        for Enhanced User Experiences </Link>
                                    <ul>
                                        <li>26 march 2023</li>
                                        <li>10 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <Link href={`/blog/${'slug'}`}><img src="/assets/images/blog/6.jpg" className="img-fluid" alt="blog" /></Link>
                                    <label>Design</label>
                                    <div className="hover-content">
                                        <Link href={`/blog/${'slug'}`}><ArrowRight className="iconsax" /></Link>
                                        <h5>- Smith warner</h5>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <Link href={`/blog/${'slug'}`}> Unlocking the Potential of Intelligent Conversations</Link>
                                    <ul>
                                        <li>27 march 2023</li>
                                        <li>12 min to read</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="theme-pagination">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <ChevronLeft className='iconsax' />
                                    </span>
                                </Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item active"><Link className="page-link" href="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"> <ChevronRight className='iconsax' /></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div >
            </section >
        </>
    )
}

export default Blog