import { useState } from 'react'
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

function Home ({heroState, updateHeroState}) {    

  
  return (
  
    <>
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
