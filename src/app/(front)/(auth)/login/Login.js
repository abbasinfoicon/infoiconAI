'use client'
import LoginForm from '@/components/home/LoginForm'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
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
                                    <LoginForm page="login" changeSignup={changeSignup} />
                                </TabPanel>
                                <TabPanel>
                                    <LoginForm page="register" />
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