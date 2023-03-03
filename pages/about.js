import React from 'react'
import Head from 'next/head'
import Otherhero from './components/Otherhero'
import Navtip from './components/Navtip'
import Navbars from './components/Navbar'
import Image from '../public/images/leader.jpg'
import Sectionprojects from './components/Sectionprojects'
import Sectioncontact from './components/Sectioncontact'
import Footer from './components/Footer'
import Saly7 from '../public/images/Saly-7.png'
import Saly3 from '../public/images/Saly-3.png'

export default function About() {
    return (
        <>
            <Head>
                <title>Perfcreg Solutions - Leading Provider of Web Development, Mobile App Development, Virtual Reality and IoT Solutions in Nigeria</title>
                <meta name="description" content="Perfcreg Solutions is a leading provider of web development, mobile app development, virtual reality, solution architecture and IoT solutions in Nigeria. We help businesses drive growth and success with innovative technology solutions." />
                <meta name="keywords" content="Perfcreg Solutions, Technology Solutions, Nigeria, Web Development, Mobile App Development, Virtual Reality, Solution Architecture, IoT, Business Growth, Success, Perfcreg.com, perfcreg.org, perfcreg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navtip />
                <Navbars />
                <Otherhero title="About" />
                <section className='section-about'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h4 className='tag'>5 Years of experience</h4>
                                <h1>Lorem ipsum dolor sit amet, elit. Quae.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur omnis dolores temporibus earum asperiores, ducimus incidunt illo iste perferendis cumque?
                                    Dolor, magni!
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae dolorem!
                                    Esse, dolor quas veritatis similique atque voluptatem repellat eius ex officia vel! Eligendi,
                                    mollitia quaerat odit dolores ad fuga.
                                </p>
                            </div>
                            <div className="col-md-6">
                                {/* <div className="img-box">
                                    <img src={Image.src} className="about-img" />
                                </div> */}
                                <img src={Saly7.src} />
                            </div>
                        </div>

                        <div className="row align-items-center reverse">
                            <div className="col-md-6">
                                {/* <div className="img-box">
                                    <img src={Image.src} className="about-img" />
                                </div> */}
                                <img src={Saly3.src} />
                            </div>

                            <div className="col-md-6">
                                <h4 className='tag'>5 Years of experience</h4>
                                <h1>Lorem ipsum dolor sit amet, elit. Quae.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur omnis dolores temporibus earum asperiores, ducimus incidunt illo iste perferendis cumque?
                                    Dolor, magni!
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae dolorem!
                                    Esse, dolor quas veritatis similique atque voluptatem repellat eius ex officia vel! Eligendi,
                                    mollitia quaerat odit dolores ad fuga.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Sectionprojects />
                <Sectioncontact />
                <Footer />
            </main>
        </>
    )
}
