'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Envelope, Lock, LockFill, Person } from 'react-bootstrap-icons'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Login = () => {
    const searchParams = useSearchParams();
    const signin = searchParams.get('signin');
    const [tabIndex, setTabIndex] = useState(signin ? 1 : 0); // Manage tab index state

    const changeSignup = () => {
        setTabIndex(1); // Switch to Signup tab
    }

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
                    <div className="login-box">
                        <div>
                            <h2>Welcome to <span>InfoiconAI !</span></h2>

                            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                <TabList className="nav nav-tabs">
                                    <Tab className="nav-link">Login</Tab>
                                    <Tab className="nav-link">signup</Tab>
                                </TabList>

                                <TabPanel>
                                    <form className="auth-form">
                                        <div className="mb-3 form-group">
                                            <label htmlFor="emailid" className="form-label">Email ID</label>
                                            <div className="relative">
                                                <Envelope className='iconsax' />
                                                <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid" />
                                            </div>
                                        </div>

                                        <div className="mb-2 form-group">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <div className="relative">
                                                <Lock className="iconsax" />
                                                <input placeholder="Enter your password" type="password" className="form-control" id="password" />
                                            </div>
                                        </div>

                                        <div className="text-end">
                                            <Link href="/reset-password">Forget Password?</Link>
                                        </div>

                                        <button className="btn-solid w-100 text-center mt-3">Log me in</button>
                                        <h4 className="text-title text-center mt-2">Don’t have an account ? <button onClick={changeSignup} className='mainColor'>Signup</button></h4>

                                        <div className="divider">
                                            <h3>or sign in with</h3>
                                        </div>

                                        <ul className="social-btn">
                                            <li><Link href="https://www.google.com/"><img src="/assets/svg/google.svg" className="img-fluid" />Continue with google</Link></li>
                                            <li><Link href="https://www.apple.com/"><img src="/assets/svg/apple.svg" className="img-fluid" />Continue with apple</Link></li>
                                        </ul>
                                    </form>
                                </TabPanel>
                                <TabPanel>
                                    <form className="auth-form">
                                        <div className="mb-3 form-group">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <div className="relative">
                                                <Person className="iconsax" />
                                                <input type="name" placeholder="Enter your name" className="form-control" id="name" />
                                            </div>
                                        </div>

                                        <div className="mb-3 form-group">
                                            <label htmlFor="emailid" className="form-label">Email ID</label>
                                            <div className="relative">
                                                <Envelope className='iconsax' />
                                                <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid" />
                                            </div>
                                        </div>

                                        <div className="mb-3 form-group">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <div className="relative">
                                                <Lock className="iconsax" />
                                                <input placeholder="Enter your password" type="password" className="form-control" id="password" />
                                            </div>
                                        </div>

                                        <div className="mb-3 form-group">
                                            <label htmlFor="password1" className="form-label">Confirm Password</label>
                                            <div className="relative">
                                                <LockFill className="iconsax" />
                                                <input placeholder="Enter your password" type="password" className="form-control" id="password1" />
                                            </div>
                                        </div>

                                        <button className="btn-solid w-100 text-center mt-4">Sign up</button>
                                        <h4 className="text-title text-center mt-2">Already have an account <button onClick={() => setTabIndex(0)} className='mainColor'>Sign in</button></h4>
                                    </form>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login