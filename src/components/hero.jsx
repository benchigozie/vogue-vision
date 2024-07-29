
function Hero () {


    return (
        <>
        <section id="hero" className="relative">
            <div className="bg-[url('https://ik.imagekit.io/zjcuhh7cp/interior%20design/pexels-fotoaibe-1643383%20(1).png?')]  bg-vbrown w-full bg-cover bg-center bg-no-repeat animate-opac pt-16">
                <div className="flex flex-col py-28 px-10 font-lora w-full md:block md:px-8 md:py-32 text-vwhite alg:py-28 alg:px-10   lg:px-20 relative animate-left">
                    <div className="flex">
                        <h1 className="border-4 border-vbrown p-6 bg-vblack bg-opacity-45  md:w-8/12 alg:w-4/6 lg:w-2/4 text-3xl alg:text-5xl font-bold">Transform Your Space To Your <span className="text-vbrown">Home. </span>Bring Your Vision To Life</h1>
                    </div>
                    <div className="flex mt-12 font-inter">
                        <button className="bg-vblue text-vwhite w-28 h-9 hover:transform hover:scale-105 ease-in duration-100">Get Started</button>
                        <button className="text-vwhite w-28 h-9 hover:transform hover:scale-105 ease-in duration-100 border-2">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

};

export default Hero;