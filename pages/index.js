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

export default function Home() {
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
        <Sectionservice />
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
