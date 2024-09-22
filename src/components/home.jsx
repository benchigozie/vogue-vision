import { useState } from 'react'
import Nav from './nav.jsx'
import Hero from './hero.jsx'
import InteriorInfo from './interiorinfo.jsx'
import Credentials from './credentials.jsx'
import Process from './process.jsx'
import Welcome from './welcometext.jsx'
import Partners from './partners.jsx'
import Faq from './faq.jsx'
import Ready from './ready.jsx'
import Footer from './footer.jsx'
import Spacing from './spacing.jsx'

function Home () {    

  const [heroState, setHeroState] = useState(true);

  function updateHeroState (herostate, isIntersecting) {
    setHeroState(isIntersecting);
  }



  return (
  
    <>
     <Nav heroState={heroState} />
     <Hero heroState={heroState} updateHeroState={updateHeroState}/>
     <Welcome />
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
     <Footer />
     </>
  )
};

export default Home;
