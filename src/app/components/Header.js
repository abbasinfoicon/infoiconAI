'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ArrowUp, ArrowUpShort, ChevronDown } from 'react-bootstrap-icons';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <button className="navbar-toggler d-xl-none d-inline navbar-menu-button">
                <span className="navbar-toggler-icon">
                    <i className="iconsax" data-icon="text-align-justify"></i>
                </span>
            </button>

            <Link href="/" className='flex items-center gap-3 text-xl'><img src="/assets/images/logo.png" className="img-fluid" alt="logo" /> InfoiconAI</Link>

            <nav className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div className="offcanvas offcanvas-collapse order-xl-2">
                        <div className="offcanvas-header navbar-shadow">
                            <h5 className="mb-0">Back</h5>
                            <button className="btn-close lead" type="button"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#">Features <ChevronDown className='text-[16px] ml-[10px]' /></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="/">Embeddable</Link></li>
                                        <li><Link className="dropdown-item" href="/">Configurable API</Link></li>
                                        <li><Link className="dropdown-item" href="/">File Upload</Link></li>
                                        <li><Link className="dropdown-item" href="/">Rate Limiter</Link></li>
                                        <li><Link className="dropdown-item" href="/">Custom Styling</Link></li>
                                        <li><Link className="dropdown-item" href="/">Monetization</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><Link className="nav-link" href="/">pricing</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/">docs <ArrowUpShort className="rotate-45 relative -top-[3px]" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Link href="/" className="btn btn-theme mr-3 d-sm-inline-block d-none"><span>Login</span></Link>
            <Link href="/" className="btn btn-theme d-sm-inline-block d-none"><span>Signin</span></Link>
        </header >
    )
}

export default Header