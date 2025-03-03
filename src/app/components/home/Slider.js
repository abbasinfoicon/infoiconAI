'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { PlayCircle, StarFill } from 'react-bootstrap-icons'

const Slider = () => {

    useEffect(() => {
        const laptopElement = document.querySelector(".laptop-img");
        const rotateObjects = document.querySelectorAll(".rotate-effect");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // **Laptop rotation effect** (more gradual)
            if (laptopElement) {
                let rotationDegree = Math.max(0, 60 - (scrollY / viewportHeight) * 100);
                laptopElement.style.transform = `rotateX(${rotationDegree}deg)`;
            }

            // **Rotate other objects dynamically**
            const rotationAngle = scrollY * 0.1; // Adjust rotation speed
            rotateObjects.forEach((object) => {
                object.style.transform = `rotate(${rotationAngle}deg)`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-content">
                            <div className="bg-effect">
                                <img src="assets/images/home/home-bg.gif" className="img-fluid bg-gif" alt="" />
                                <img src="assets/svg/home/1.png" className="img-fluid effect1 rotate-effect" alt="" />
                                <img src="/assets/svg/home/2.svg" className="img-fluid effect2 rotate-effect" alt="" />
                            </div>
                            <div>
                                <h1>No-Code <div className="title-effect"><img src="assets/images/title-effect.png" alt="" /><span>Monetizable</span></div> and AI Widgets</h1>
                                <p>Seamlessly integrate AI into your website, blogs, or platform without writing a single line of code with our white label platform.</p>

                                <Link href="/" className="start-link"><PlayCircle className="iconsax" /> Get Started</Link>
                            </div>
                        </div>

                        <div className="home-laptop px-md-0 px-3">
                            <div className="laptop-sec position-relative">
                                <div className="hand-sec">
                                    <img src="assets/images/home/hand.png" className="img-fluid left-hand" alt="hand" />
                                    <img src="assets/images/home/hand.png" className="img-fluid right-hand" alt="hand" />
                                    <img src="assets/images/home/finger.png" className="img-fluid left-finger" alt="hand" />
                                    <img src="assets/images/home/finger.png" className="img-fluid right-finger" alt="hand" />
                                </div>
                                <img src="assets/images/home/laptop.png" className="img-fluid laptop-img" alt="laptop" />
                            </div>
                            <div className="home-info">
                                <ul className="info-list">
                                    <li>ChatBot</li>
                                    <li>Image Generator</li>
                                    <li>Translate anything</li>
                                </ul>
                                <ul className="star-rating">
                                    <li><StarFill /></li>
                                    <li><StarFill /></li>
                                    <li><StarFill /></li>
                                    <li><StarFill /></li>
                                    <li><StarFill /></li>
                                </ul>
                                <h4>A technique to write all of your material 10 times more quickly.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider