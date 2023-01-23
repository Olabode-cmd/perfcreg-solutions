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
import { HiOutlineDesktopComputer, HiOutlineFingerPrint } from 'react-icons/hi'
import { MdMobileFriendly } from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'

export default function Home() {

  const service = [
    {
      icon: <TbWorld className='service-icon'/>,
      title: 'Web Development',
      text: 'At Perfcreg Solutions delivers custom web development services tailored to your business. We create responsive, user-friendly websites optimized for conversions and search engines using the latest technologies. Let us build a website that effectively communicates your value proposition and improves your online presence.'
    },
    {
      icon: 'home',
      title: 'Home',
      text: 'Lorem Ipsum'
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
