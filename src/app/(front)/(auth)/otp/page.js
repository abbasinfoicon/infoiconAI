'use client'
import Link from 'next/link'
import React from 'react'

const OTP = () => {
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
                            <h2><span>Verification code</span></h2>
                            <p>Enter the OTP send to ka****@gmail.com</p>
                            <form className="auth-form">
                                <div className="mb-3">
                                    <label htmlFor="otp" className="form-label">OTP</label>
                                    <input type="number" max="6" placeholder="Enter 6 digit code" className="form-control" id="otp"/>
                                </div>
                                <button data-cursor="pointer" className="btn-solid btn-absolute text-center mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OTP