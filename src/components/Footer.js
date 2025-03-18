import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import Info from './home/Info'

const Footer = () => {
  return (
    <>
      <Info />

      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-main">
              <Link href="/" className="footer-logo text-xl"><img src="/assets/images/logo.png" className="img-fluid" alt="" /> InfoiconAI</Link>
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your mail" />
                  <Link href="/" className="btn-basic">Subscribe</Link>
                </div>
              </form>

              <ul className="social-links">
                <li><Link href="https://facebook.com/"><img src="/assets/svg/fb.svg" className="img-fluid" alt="facebook" /></Link></li>
                <li><Link href="https://in.linkedin.com/"><img src="/assets/svg/linkedin.svg" className="img-fluid" alt="linkedin" /></Link></li>
                <li><Link href="https://www.instagram.com/"><img src="/assets/svg/insta.svg" className="img-fluid" alt="insta" /></Link></li>
                <li><Link href="https://twitter.com/login"><img src="/assets/svg/twitter.svg" className="img-fluid" alt="twitter" /></Link></li>
              </ul>
            </div>

            <div className="link-section">
              <div className="footer-title">
                <img src="/assets/svg/star.svg" className="img-fluid" alt="star" />
                Product
              </div>
              <div className="footer-content">
                <ul>
                  <li><Link href="/features"><ArrowRight /> Features</Link></li>
                  <li><Link href="/pricing"><ArrowRight /> Pricing</Link></li>
                  <li><Link href="/docs" target='_blank'><ArrowRight /> Docs</Link></li>
                  <li><Link href="/contact"><ArrowRight /> Contact us</Link></li>
                </ul>
              </div>
            </div>

            <div className="link-section">
              <div className="footer-title">
                <img src="/assets/svg/star.svg" className="img-fluid" alt="star" />
                Company
              </div>
              <div className="footer-content">
                <ul>
                  <li><Link href="/about"><ArrowRight /> About Us</Link></li>
                  <li><Link href="/blog"><ArrowRight /> Blog</Link></li>
                  <li><Link href="/contact"><ArrowRight /> Partnership</Link></li>
                  <li><Link href="/affiliate-program"><ArrowRight /> Affiliate program</Link></li>
                </ul>
              </div>
            </div>

            <div className="link-section">
              <div className="footer-title">
                <img src="/assets/svg/star.svg" className="img-fluid" alt="star" />
                Resources
              </div>
              <div className="footer-content">
                <ul>
                  <li><Link href="/terms"><ArrowRight /> Terms & Condition</Link></li>
                  <li><Link href="/policy"><ArrowRight /> Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center">
            <h4>@2025 All the Copyright Reserved.</h4>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer