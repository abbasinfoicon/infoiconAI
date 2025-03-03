import Breadcrumb from '@/app/components/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'

const AffiliateProgram = () => {
    return (
        <>
            <Breadcrumb title="Affiliate Program" content="We offer a diverse set of features tailored to elevate your brand's presence." image="contact-vector.svg" />

            <section className="contact-section pricing-section pb-md-5 pb-0">
                <div className="container">
                    <div className="title-basic">
                        <h2 className="text-white !font-bold mb-2">Become Affiliate</h2>
                        <p className='text-white mb-0'>Get paid 10% for every new paying user you refer to us</p>
                        <p className='text-white'><strong>AI has a global market size of over <span className='mainColor text-3xl'>$126,800,000,000</span> US Dollars by 2025</strong></p>
                    </div>


                    <div className="contact-details">
                        <div className="row">
                            <div className="col-xl-12">
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

                                        <div className="col-12 flex justify-end">
                                            <Link href="/" data-cursor="pointer" className="!flex !items-center gap-3 btn-solid">Join Program <ArrowRight /></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AffiliateProgram