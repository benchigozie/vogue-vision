import { useEffect, useRef } from "react"

function Partners () {

    const scrollContainerRef = useRef();
    
    useEffect (() => {
        
        const width = `${scrollContainerRef.current.offsetWidth}px`;
        console.log(width);
    }, [])

    
    

    return (
        <>
        <section className="flex flex-col items-center overflow-hidden">
            <p className="text-2xl text-vbrown font-lora font-medium text-center py-10">Trusted By</p>
            <div className="overflow-clip bg-gra w-[1001px] from-vblue to-vwhite self-center">
                <div className="flex w-max gap-14 px-14 relative animate-inf">
                    <div id="original-scroll" ref={scrollContainerRef} className="flex gap-14 self-center">
                        <div className="">
                            <img className="" src="src/assets/images/ATT-logo-1-768x384.png" alt=""/>
                        </div>
                        <div>
                            <img src="src/assets/images/Coca-Cola-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Dominos-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Kappa-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/North-Face-Logo-768x408.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Tim-Hortons-logo-768x432.png" alt="" />
                        </div>
                    </div>
                    <div className="flex gap-14">
                        <div className="">
                            <img className="" src="src/assets/images/ATT-logo-1-768x384.png" alt=""/>
                        </div>
                        <div>
                            <img src="src/assets/images/Coca-Cola-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Dominos-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Kappa-logo-768x432.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/North-Face-Logo-768x408.png" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/images/Tim-Hortons-logo-768x432.png" alt="" />
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </section>
        </>
    )
};

export default Partners