import { useState, useEffect } from 'react'



function Nav () {
    
    setTimeout(() => {
        const hamBurger = document.querySelector("#ham-burger");
        const hamObserver = new MutationObserver((entries) => {
        console.log(entries);
    });

    hamObserver.observe(hamBurger, {
        attributes: true,
        attributeFilter: ["style"],
    });
    }, 1000)
    

    

    function setHam(){
        setHamState(hamState => !hamState);
        
    }
    const [hamState, setHamState] = useState(false);

    return (
        <>
        <nav id="nav" className="flex gap-x-7 justify-between items-center alg:px-14 px-3 py-2 font-inter">
            <div className="w-2/3 alg:w-auto">
              <img src="https://ik.imagekit.io/zjcuhh7cp/tr:w-226,h-88/vogue-vision-high-resolution-logo-transparent%201%20(2).png?" alt="" className="w-28"/>  
            </div>
            <div className="nav-links gap-x-7 hidden alg:flex text-vblack justify-around w-1/3 basis-6/12">
                <a className='hover:scale-105 ease-in'>Home</a>
                <a className='hover:scale-105 ease-in'>About</a>
                <a className='hover:scale-105 ease-in'>service</a>
                <a className='hover:scale-105 ease-in'>Port-Folio</a>
                <a className='hover:scale-105 ease-in'>Contact</a>
            </div>
            <div>
                <button className="bg-vblue text-vwhite w-28 h-9 hidden tn:block hover:transform hover:scale-105 ease-in duration-100">Get in touch</button>
            </div>
            
            <div onClick={setHam} id="ham-burger" className={hamState ? "active-ham cursor-pointer flex flex-col alg:hidden gap-y-0.5 w-max ease-in z-10" : "flex flex-col alg:hidden gap-x-0.5 gap-y-0.5 w-max cursor-pointer z-10"}>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-200"></div>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-200"></div>
                    <div className="bg-vblack w-9 h-1.5 rounded-lg bar ease-in duration-200"></div>
            </div>
        </nav>
            <div>
                <div onClick={setHam} className={hamState ? "fixed h-screen w-screen bg-vwhite top-0 opacity-1 duration-500 flex flex-col": "fixed h-screen w-screen bg-vwhite -top-full opacity-0 duration-500 flex flex-col"}> 
                    
                   
                        <div className="text-3xl flex flex-col px-9 gap-y-5 py-20">
                            <a>About</a>
                            <a>service</a>
                            <a>Port-Folio</a>
                            <a>Contact</a>
                        
                        </div>
                </div>
                
            </div>
        </>
    )


   
}


export default Nav