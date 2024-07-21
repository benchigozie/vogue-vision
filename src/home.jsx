import './home.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import InteriorInfo from './components/interiorinfo.jsx'
import Credentials from './components/credentials.jsx'
import Process from './components/process.jsx'
import Welcome from './components/welcometext.jsx'

function Home() {

  return (
    <>
     <Nav />
     <Hero />
     <Welcome />
     <InteriorInfo />
     <Credentials />
     <Process />
     </>
  )
};

export default Home
