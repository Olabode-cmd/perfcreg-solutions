import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Otherhero from './components/Otherhero'
import Navtip from './components/Navtip'
import Navbars from './components/Navbar'
import Sectioncontact from './components/Sectioncontact'
import Footer from './components/Footer'
import TypeWriter from './components/TypeWriter'
import { HiOutlineDesktopComputer, HiOutlineFingerPrint } from 'react-icons/hi'
// import { MdMobileFriendly } from 'react-icons/md'
import { TbWorld, TbCloudComputing } from 'react-icons/tb'
import Sectionservice from './components/Sectionservice'
import ServiceBox from './components/ServiceBox'
import { MdMobileFriendly, MdOutlineBuild } from 'react-icons/md'
import { GiVrHeadset } from 'react-icons/gi'
import { AiOutlineSolution } from 'react-icons/ai'


export default function Services() {
    const [msg, setMsg] = useState([])
    const [service, setService] = useState([])
    

    useEffect(() => {
        setMsg([
            "Software Development",
            "Mobile App Development",
            "Cloud Solution Architecture",
            "Big Data and Data Analysis",
            "Ai adoption",
            "Business Digital Transformation",
            "Internet of Things",
            "Research and Development",
            "Virtual Reality"
        ])

        setService([
            {
                icon: <TbWorld className='service-icon' />,
                title: "Web Development",
                text: "Perfcreg Solutions offers custom web development services that are tailored to meet the unique needs of your business. Let us build a website that effectively communicates your value proposition and improves your online presence."
            },
            {
                icon: <MdMobileFriendly className='service-icon' />,
                title: "Mobile App Development",
                text: "Perfcreg Solutions specializes in creating high-quality, user-friendly mobile apps for iOS, Android, and other platforms. Let us help you take your business to the next level with a mobile app that engages and delights your customers.",
            },
    
            {
                icon: <GiVrHeadset className='service-icon' />,
                title: "Virtual Reality",
                text: "Perfcreg Solutions provides virtual reality development services for various industries like education, gaming, real estate, tourism, and many more. Let us create a VR experience that immerses and excites your audience."
            },
            {
                icon: <AiOutlineSolution className='service-icon' />,
                title: "Cloud Solution Architecture",
                text: "Perfcreg Solutions offers Cloud Solution Architecture services for scalable, secure and efficient cloud-based solutions. We help with cloud migration, design, security, disaster recovery and more. Drive your business forward with our expertise."
            },
            {
                icon: <TbCloudComputing className='service-icon' />,
                title: "Cloud Computing",
                text: "Perfcreg Solutions offers a wide range of Cloud Computing services like Cloud Migration, Cloud Infrastructure Management, Cloud Security, Cloud Backup and Disaster recovery, Cloud Automation and many more. Let us help you stay competitive in today's digital landscape with our Cloud Computing services."
            },
            {
                icon: <MdOutlineBuild className='service-icon' />,
                title: "Software Development",
                text: "Perfcreg Solutions provides software development services that are designed to meet the unique needs of your business.We specialize in building custom software solutions that are tailored to your specific requirements.Whether you need a web application, a mobile app, or a desktop application, we have the expertise to make it happen."
            },
            {
                title: "Business Digital Transformation",
                text: "Perfcreg Solutions helps businesses digitally transform with the latest technologies and methodologies.Let us help you stay competitive and achieve your business goals with our digital transformation services."
            },
            {
                title: "Internet of Things",
                text: "Perfcreg Solutions offers Internet of Things solutions that connect devices, machines, and people to the Internet, enabling data collection and analysis"
            },
        ])
    }, [])
    return (
        <>
            <Head>
                <title>Perfcreg Solutions - Leading Provider of Web Development, Software development, Mobile App Development, Virtual Reality and IoT Solutions in Nigeria</title>
                <meta name="description" content="Perfcreg Solutions is a leading provider of web development, mobile app development, virtual reality, solution architecture and IoT solutions in Nigeria. We help businesses drive growth and success with innovative technology solutions." />
                <meta name="keywords" content="Perfcreg Solutions, Technology Solutions, Nigeria, Web Development, Mobile App Development, Virtual Reality, Solution Architecture, IoT, Business Growth, Success" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navtip />
                <Navbars />
                <Otherhero title={<div>We offer the following Services : <TypeWriter messages={msg} /></div>} />

                <Sectionservice title="Some of our Core Services">
                    {
                        service.length > 0 && service.map((items, index) => (
                            <ServiceBox key={index} text={items.text} icon={items.icon} title={items.title} />
                        ))
                    }
                </Sectionservice>


                <Sectioncontact />
                <Footer />
            </main>
        </>
    )
}
