import './home.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import InteriorInfo from './components/interiorinfo.jsx'
import Credentials from './components/credentials.jsx'
import Process from './components/process.jsx'
import Welcome from './components/welcometext.jsx'
import Partners from './components/partners.jsx'
import Faq from './components/faq.jsx'

function Home() {

  return (
    <>
     <Nav />
     <Hero />
     <Welcome />
     <InteriorInfo />
     <Credentials />
     <Process />
     <Partners />
     <Faq />
     </>
  )
};

export default Home
