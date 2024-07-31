const Footer = () => {
    return (
        <>
        <footer className="bg-[#3a2a0e] text-vwhite text-opacity-80 px-[5%] md:px-16">
            <div className="py-24 grid md:grid-cols-2 lg:grid-cols-3 auto-cols-max grid-cols-1 gap-20 md:gap-y-20 font-inter">
                <div>
                <img src="https://ik.imagekit.io/zjcuhh7cp/tr:w-113,h-44/interior%20design/vogue-vision-high-resolution-logo-transparent%201%20(2).png?" alt="" />
                </div>
                <div className="flex flex-col">
                    <a href="">Home Page</a>
                    <a href="">About Us</a>
                    <a href="">Our Services</a>
                    <a href="">Our Port Folio</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="flex flex-col gap-28">
                    <div className="flex flex-col">
                        <p>Subscribe to our newsletter to recieve the latest updates</p>
                        <div className="bg-vwhite p-1 flex justify-between rounded-lg shadow-inner">
                            <input className="min-w-32 w-[80%] text-vblack rounded-md focus:outline-vblue caret-sky-400 px-2" type="email" />
                            <button className="px-3 py-2 bg-vblue rounded-md">Subscribe</button>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span>
                            <img src="/src/assets/images/facebook-app-symbol.png" alt="" />
                        </span>
                        <span>
                            <img src="/src/assets/images/instagram.png" alt="" />
                        </span>
                        <span>
                            <img src="src/assets/images/linkedin.png" alt="" />
                        </span>
                        <span>
                            <img src="src/assets/images/whatsapp.png" alt="" />
                        </span>
                    </div>    
                </div>
            </div>

            <div className="border-t border-vwhite py-4">
                <p className="font-lora">© All Rights Reserved</p>
            </div>
        </footer>
        </>
    )
};

export default Footer;