'use client'
import Link from 'next/link'
import React from 'react'
import { Envelope } from 'react-bootstrap-icons'

const ResetPassword = () => {
    return (
        <section className="login-section">
            <Link href="/" className='logo-auth flex items-center gap-3 text-xl'><img src="/assets/images/logo.png" className="img-fluid " /> InfoiconAI</Link>

            <div className="row m-0">
                <div className="col-lg-7 d-lg-inline-block d-none p-0">
                    <div className="login-animation">
                        <img src="/assets/svg/auth/1.svg" className="img-fluid img-base" alt="" />
                        <img src="/assets/svg/auth/2.svg" className="img-fluid img-light" alt="" />
                        <div className="img-face"><img src="/assets/svg/auth/3.svg" className="img-fluid img-faces" alt="" /></div>
                    </div>
                </div>

                <div className="col-xxl-4 col-lg-5 ms-auto p-0">
                    <div className="login-box mt-sm-0">
                        <div>
                            <h2><span>Reset password</span></h2>
                            <p>When you provide your email address, we'll send you a message with information on how to
                                reset.</p>
                            <form className="auth-form">
                                <div className="mb-3 form-group">
                                    <label htmlFor="emailid" className="form-label">Email ID</label>
                                    <div className="relative">
                                        <Envelope className='iconsax' />
                                        <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid" />
                                    </div>
                                </div>

                                <button className="btn-solid btn-absolute text-center mt-3">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword