import React from 'react'
import Image from '../../public/images/leader.jpg'
import Saly7 from '../../public/images/Saly-7.png'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'

export default function Sectionabout() {
    return (
        <section className='section-about' id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="img-box">
                            <img src={Image.src} className="about-img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className='tag'>8 Years combinative experience</h4>
                        <h1>in Providing Innovative Technology Solutions</h1>
                        <p>
                            At Perfcreg Solutions, we have a wealth of experience when it comes to providing cutting-edge technology solutions
                            for businesses. With 8 years of cumulative experience, our team
                            of experts has the knowledge and skills to help your company
                            digitally transform and stay ahead of the competition.
                        </p>

                        <p>
                            We are committed to delivering innovative solutions that drive 
                            business growth and success. Whether you need help with web 
                            development, mobile app development, virtual reality, 
                            solution architecture, or cloud computing, we have the expertise 
                            to make it happen. Our team is dedicated to understanding your business needs and providing 
                            tailored solutions that are designed to help you achieve your objectives. 
                            Trust us to guide your business to the next level of success. 
                            Contact us now to learn more about how we can help your business succeed with technology.
                        </p>

                        <div className='d-flex align-items-center text-cta'>
                            <Link href="/about" className='text-btn'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
