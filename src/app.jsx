import "./app.css"
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home.jsx";
import Nav from "./components/nav.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import PortFolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";


function  App () {

    
    const [heroState, setHeroState] = useState(true);

  function updateHeroState (herostate, isIntersecting) {

    setHeroState(isIntersecting);
  }

  const location = useLocation().pathname;
 
  
    useEffect(() => {
        location == "/"? "" : setHeroState(false);
      },[heroState]);


  
    return (
    <>    
    <Nav heroState={heroState}/>
    <Routes>
        <Route path="/" element={<Home heroState={heroState} updateHeroState={updateHeroState}/>}></Route> 
        <Route path="/about-us" element={<About heroState={heroState} updateHeroState={updateHeroState}/>} ></Route>
        <Route path="/services" element={<Services heroState={heroState}/>}></Route>
        <Route path="/port-Folio" element={<PortFolio heroState={heroState}/>}></Route>
        <Route path="/contact-us" element={<Contact heroState={heroState}/>}></Route>
    </Routes>
    </>
    )
    
}
export default App;