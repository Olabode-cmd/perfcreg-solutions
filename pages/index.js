import Head from 'next/head'
import Navtip from './components/Navtip'
import Navbars from './components/Navbar'
import Sectionhero from './components/Sectionhero'
import Sectionabout from './components/Sectionabout'
import Sectionservice from './components/Sectionservice'
import Sectionfixedbg from './components/Sectionfixedbg'
import Sectioncards from './components/Sectioncards'
import Sectionprojects from './components/Sectionprojects'
import Sectionteam from './components/Sectionteam'
import Sectioncontact from './components/Sectioncontact'
import Footer from './components/Footer'
import ServiceBox from './components/ServiceBox'
// import Sectionservice from './components/Sectionservice'
import { MdMobileFriendly, MdOutlineBuild } from 'react-icons/md'
import { GiVrHeadset } from 'react-icons/gi'
import { TbWorld, TbCloudComputing } from 'react-icons/tb'

import { AiOutlineSolution } from 'react-icons/ai'

export default function Home() {

  const service = [
    {
      icon: <MdOutlineBuild className='service-icon' />,
      title: "Software Development",
      text: "Perfcreg Solutions provides software development services that are designed to meet the unique needs of your business.We specialize in building custom software solutions that are tailored to your specific requirements.Whether you need a web application, a mobile app, or a desktop application, we have the expertise to make it happen."
    },
    {
      icon: <GiVrHeadset className='service-icon' />,
      title: "Virtual Reality",
      text: "Experience the future of technology with Perfcreg Solutions' Virtual Reality services. Immerse your customers in a fully interactive and engaging environment, whether it's for training, entertainment or product demonstrations. Our VR experts will work with you to create custom solutions tailored to your needs, and stay updated with the latest VR technologies to give you the competitive edge."
  },
    {
      icon: <TbCloudComputing className='service-icon' />,
      title: "Cloud Computing",
      text: "Perfcreg Solutions offers a wide range of Cloud Computing services like Cloud Migration, Cloud Infrastructure Management, Cloud Security, Cloud Backup and Disaster recovery, Cloud Automation and many more. Let us help you stay competitive in today's digital landscape with our Cloud Computing services."
    },

  ]

  return (
    <>
      <Head>
        <title>Perfcreg Solutions - Leading Provider of Web Development, Mobile App Development, Virtual Reality and IoT Solutions in Nigeria</title>
        <meta name="description" content="Perfcreg Solutions is a leading provider of web development, mobile app development, virtual reality, solution architecture and IoT solutions in Nigeria. We help businesses drive growth and success with innovative technology solutions." />
        <meta name="keywords" content="Perfcreg Solutions, Technology Solutions, Nigeria, Web Development, Mobile App Development, Virtual Reality, Solution Architecture, IoT, Business Growth, Success" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navtip />
        <Navbars />
        <Sectionhero />
        <Sectionabout />

        <Sectionservice title="Some of our Core Services">
          {
            service.map((items, index) => (
              <ServiceBox key={index} text={items.text} icon={items.icon} title={items.title} />
            ))
          }
        </Sectionservice>
        <Sectionfixedbg />
        <Sectionprojects />
        <Sectioncards />
        <Sectionteam />
        <Sectioncontact />
        {/* <h1 className='text-primary'>Inter!</h1> */}
      </main>
      <Footer />
    </>
  )
}
