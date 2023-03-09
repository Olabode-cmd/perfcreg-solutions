import React from 'react'
import Head from 'next/head'
import Otherhero from './components/Otherhero'
import Navtip from './components/Navtip'
import Navbars from './components/Navbar'
import Image from '../public/images/leader.jpg'
import Sectionprojects from './components/Sectionprojects'
import Sectioncontact from './components/Sectioncontact'
import Footer from './components/Footer'
import TeamCard from './components/TeamCard'
import Sectionteam from './components/Sectionteam'
import Saly7 from '../public/images/Saly-7.png'
import Saly3 from '../public/images/Saly-3.png'
import TypeWriter from './components/TypeWriter'

import Lottie from "lottie-react";
import Pick1 from "../public/anime/25216-team-work.json";
import Pick2 from "../public/anime/74036-iot-transparent.json";
import Pick3 from "../public/anime/90222-work-team.json";
import Pick4 from "../public/anime/97525-code-dark.json";

import Team1 from '../public/images/team1.jpg'


export default function About() {

    const [state, setState] = React.useState({
        team: [
            {
                name: 'Adaranijo Idris',
                position: "Lead Project Manager / Cloud Solution Architect",
                facebook: '',
                twitter: '',
                linkedin: 'idris-adaranijo-61b669199/',
                image: Team1.src
            },
            {
                name: 'Oyewo Oluwafemi',
                position: "Software Developer / Cloud Solution Architectect",
                facebook: 'phemieny007',
                twitter: 'phemieny7',
                linkedin: 'oyewo-oluwafemi-8bb42b7b',
                image: Team1.src
            },
            {
                name: 'Olabode Balogun',
                position: "Frontend Engineer / Content Creator",
                facebook: 'phemieny007',
                twitter: 'phemieny7',
                linkedin: 'oyewo-oluwafemi-8bb42b7b',
                image: Team1.src
            },
            {
                name: 'Omoniyi Opeyemi',
                position: "Frontend Engineer",
                facebook: '',
                twitter: 'Electro40679166',
                linkedin: 'opemipo-omoniyi11111',
                image: Team1.src
            },
            {
                name: 'Karaole Muizz',
                position: "Fullstacke Developer/ Graphics Designer",
                facebook: '',
                twitter: 'Electro40679166',
                linkedin: 'opemipo-omoniyi11111',
                image: Team1.src
            },
        ],
    })
    const [msg, setMsg] = React.useState([])

    React.useEffect(() => {
        setMsg([
            "Hunger for greatness",
            "Unparallel Experience",
            "Innovative Thinking",
            "Evolving Strategy",
            "Progressive Transformation",
            "Pioneering Experience"
        ])
    })
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
                <Otherhero title={<div>Our Story Reflects Our : <TypeWriter messages={msg} /></div>} />

                <section className='section-about'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h4 className='tag'>Who Are we?</h4>
                                <h1>Innovative Solutions for Your Business</h1>
                                <p>We are Perfcreg Solutions, an innovative solution provider with over 8 years of experience. Our team of experts specialize in software development, cloud infrastructure, web and mobile application development, and virtual reality integration. We offer customized solutions that are tailored to meet the unique needs of our clients.
                                </p>

                                <p>At Perfcreg Solutions, we are dedicated to providing quality services that deliver results. Our solutions are designed to help businesses enhance their online presence, increase efficiency, and achieve their goals. We pride ourselves on our commitment to excellence, attention to detail, and exceptional customer service.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <Lottie animationData={Pick1} loop={true} />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center reverse">
                        <div className="col-md-6">
                                <div className="img-box">
                                    <Lottie animationData={Pick2} loop={true} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <   h4 className='tag'>Our Story</h4>
                                <h1>Masters uniting to revolutionize solutions</h1>
                                <p>Perfcreg Solutions is a story of like-minded professionals with diverse skills coming together to build a team that revolutionizes solutions. Our team consists of masters in every aspect of software development, web development, mobile app development, cloud infrastructure, virtual reality, and more.
                                </p>

                                <p>We believe that our combined knowledge and experience enable us to provide clients with the best possible solutions. We're committed to building lasting relationships with our clients by delivering innovative, practical, and scalable solutions that align with their unique needs. At Perfcreg Solutions, we pride ourselves on our ability to create customized solutions that help our clients meet their business objectives and stay ahead of the competition.
                                </p>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h4 className='tag'>Mission And Vision</h4>
                                <h1>Driving Customer Digital Transformation</h1>
                                <p>At Perfcreg Solutions, our mission is to enable businesses of all sizes and stages to effortlessly embrace digital transformation through innovative and custom-made solutions that optimize their operations, enhance their customer experience and increase their bottom line.
                                </p>

                                <p>
                                    Our vision is to be the preferred digital transformation partner for businesses around the world, providing cutting-edge technology solutions, unparalleled customer service, and unwavering commitment to helping our clients achieve their business goals. We aim to make the digital transformation journey as easy as possible for our customers, empowering them to succeed in the fast-paced digital landscape.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <Lottie animationData={Pick4} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Sectionprojects /> */}

                <Sectionteam>
                    {
                        state.team.length > 0 && state.team.map((user, index) => (
                            <TeamCard
                                image={user.image}
                                name={user.name}
                                position={user.position}
                                facebook={user.facebook}
                                twitter={user.twitter}
                                linkedin={user.linkedin}
                                key={user.name}
                            />
                        ))
                    }

                </Sectionteam>
                <Sectioncontact />
                <Footer />
            </main>
        </>
    )
}
