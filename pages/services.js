import React from 'react'
import Head from 'next/head'
import { HiOutlineDesktopComputer, HiOutlineFingerPrint } from 'react-icons/hi'
import { MdMobileFriendly } from 'react-icons/md'
import Otherhero from './components/Otherhero'
import Navtip from './components/Navtip'
import Navbars from './components/Navbar'
import Sectioncontact from './components/Sectioncontact'
import Footer from './components/Footer'

export default function Services() {
    return (
        <>
            <Head>
                <title>Perfcreg || Services Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navtip />
                <Navbars />
                <Otherhero title="Services" />

                <section className='section-service'>
                    <div className="container">
                        <h4 className="tag">services we provide</h4>
                        <h2 className='title'>Lorem ipsum dolor sit amet consectetur.</h2>


                        <div className="services">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <HiOutlineDesktopComputer className='service-icon' />
                                            <span className='title'>Web Design</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <MdMobileFriendly className='service-icon' />
                                            <span className='title'>Lorem Ipdum</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <HiOutlineDesktopComputer className='service-icon' />
                                            <span className='title'>Web Design</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <HiOutlineFingerPrint className='service-icon' />
                                            <span className='title'>ipsum lorem</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <HiOutlineFingerPrint className='service-icon' />
                                            <span className='title'>ipsum lorem</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="service-box">
                                        <div className="service-title">
                                            <HiOutlineFingerPrint className='service-icon' />
                                            <span className='title'>ipsum lorem</span>
                                        </div>

                                        <div className="service-content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                                                excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                                                Ut sit perferendis quaerat exercitationem dolore.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <Sectioncontact />
                <Footer />
            </main>
        </>
    )
}
