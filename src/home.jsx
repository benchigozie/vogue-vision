import './home.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import InteriorInfo from './components/interiorinfo.jsx'
import Credentials from './components/credentials.jsx'
import Process from './components/process.jsx'
import Welcome from './components/welcometext.jsx'
import Partners from './components/partners.jsx'
import Faq from './components/faq.jsx'
import Ready from './components/ready.jsx'
import Footer from './components/footer.jsx'
import Spacing from './components/spacing.jsx'

function Home() {

  return (
    <>
     <Nav />
     <Hero />
     <Spacing />
     <Welcome />
     <Spacing />
     <InteriorInfo />
     <Spacing />
     <Credentials />
     <Spacing />
     <Process />
     <Spacing />
     <Partners />
     <Spacing />
     <Faq />
     <Spacing />
     <Ready />
     <Spacing />
     <Footer />
     </>
  )
};

export default Home
