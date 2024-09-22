import { useState, useEffect, useRef } from 'react'



function Nav ({heroState}) {

    
    
    const [hamState, setHamState] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    function setHam(){
        setHamState(hamState => !hamState);
        
    }
    function updateWidth () {
        setScreenWidth(window.innerWidth)
    }

    const navBar = useRef();


    useEffect (() => {
        if(heroState){
            navBar.current.style.backgroundColor = "";
            navBar.current.style.boxShadow = "";

        }
        else {
            navBar.current.style.backgroundColor = "rgb(243 244 246)";
            navBar.current.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";
        }
       

    },[heroState])

    useEffect (() => {

        window.addEventListener('resize', () => {
            updateWidth();
            if (screenWidth >= 910 ){
                setHamState(false);
            }
        })
        
        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [screenWidth])
    return (
        <>
        <nav ref={navBar} id="nav" className="flex gap-x-7 justify-between items-center alg:px-14 px-3 py-2 font-inter fixed w-full z-20 ease-in duration-300">
            <div className="w-2/3 alg:w-auto">
              <img src="https://ik.imagekit.io/zjcuhh7cp/tr:w-113,h-44/interior%20design/vogue-vision-high-resolution-logo-transparent%201%20(2).png?" alt="" /> 
            </div>
            <div className="nav-links gap-x-7 hidden alg:flex text-vblack justify-around w-1/3 basis-6/12">
                <a className='hover:scale-105 ease-in'>Home</a>
                <a className='hover:scale-105 ease-in' href='src/about/index.html'>About</a>
                <a className='hover:scale-105 ease-in'>service</a>
                <a className='hover:scale-105 ease-in'>Port-Folio</a>
                <a className='hover:scale-105 ease-in'>Contact</a>
            </div>
            <div>
                <button className="bg-vblue text-vwhite w-28 h-9 hidden tn:block hover:transform hover:scale-105 ease-in duration-100">Get in touch</button>
            </div>
            
            <div onClick={setHam} id="ham-burger" className={hamState ? "active-ham cursor-pointer flex flex-col alg:hidden gap-y-0.5 w-max" : "flex flex-col alg:hidden gap-x-0.5 gap-y-0.5 w-max cursor-pointer"}>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-300"></div>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-300"></div>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-300"></div>
            </div>
        </nav>
            <div className='font-inter'>
                <div onClick={setHam} className={hamState ? "fixed h-screen w-screen -top-0 bg-vwhite opacity-1 duration-500 ease-in flex flex-col z-10": "absolute h-screen w-screen bg-vwhite -top-full opacity-0 ease-in duration-500 z-10"}> 
                    

                        <div className="text-2xl alg:text-3xl flex flex-col px-9 gap-y-5 py-24 text-vblack">
                            <a>About</a>
                            <a>service</a>
                            <a>Port-Folio</a>
                            <a>Contact</a>     
                        </div>
                </div>
                
            </div>
        </>
    )


   
};


export default Nav;