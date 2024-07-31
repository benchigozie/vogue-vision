function Ready () {
    
    return (
        <>
        <section className="flex justify-center flex-col gap-16 md:flex-row md:gap-28 md:px-[5%] alg:px-0 alg:gap-56 lg:gap-80  font-inter">
            <div className="flex flex-col gap-4 justify-center px-[5%]">
                <h4 className="text-lg text-vblack font-medium md:self-start">Ready to Start your Project?</h4>
                <div>
                    <form className="text-vblack font-inter flex flex-col gap-4">
                        <div className="flex">
                            <label className="w-1/6 md:w-20" htmlFor="your-name">Name:</label>
                            <input className="w-5/6 md:2-[259px] bg-vblack bg-opacity-15 rounded-md py-1 px-1 focus:outline-vblue caret-sky-400" type="text" name="your-name" id="your-name"/>
                        </div>
                        <div className="flex">
                            <label className="w-1/6 md:w-20" htmlFor="your-email">Email:</label>
                            <input className="w-5/6 md:2-[259px] bg-vblack bg-opacity-15 rounded-md px-1 py-1 focus:outline-vblue caret-sky-400" type="email" name="your-email" id="your-email"/>
                        </div>
                        
                        <button className=" text-vwhite w-full md:w-[339px] h-9 hidden tn:block hover:transform hover:scale-105 ease-in duration-100 bg-gradient-to-r from-vblue to-sky-400">Get a Quote</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-4 px-[5%] w-full">
                <h4 className="text-lg text-vblack font-medium">Let's start making your dream your Reality</h4>
                <button className="bg-vblue text-vwhite w-28 h-9 hidden tn:block hover:transform hover:scale-105 ease-in duration-100">Book a Call</button>
            </div>
        </section>
        </>
    ) 
};

export default Ready;