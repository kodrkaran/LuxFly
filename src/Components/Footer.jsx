import { Link } from "react-router-dom";
import {User, } from "lucide-react";

function Footer() {
    return (
        <>
            <div className=" w-full h-75 bg-white border-neutral-300 flex items-center">
                <Link to="/home"><img className="h-17 ml-40 -mt-24   cursor-pointer" src="src/assets/Primary-logo.png" alt="" /></Link>
                <p className="absolute -mt-30 ml-60 text-2xl font-bold">LuxFly</p>
                <p className="-ml-12 w-58 mt-7  text-neutral-600 font-semibold">
                    Discover the world one adventure at a time with LuxFly. Your journey begins here.
                </p>

                <div className="h-[38px] sm:h-[max(3.2552vw,40px)] absolute  w-[180px] xs:w-[150px] mt-45 sm:w-[max(10.4167vw,120px)] sm:ml-[10.3450vw] sm:mr-[0.2vw] gap-[12px] sm:gap-[0.5208vw] rounded-full border flex border-neutral-300 items-center justify-evenly px-2">
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/facebook.png" alt="Facebook" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/instagram-53.png" alt="Instagram" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/github.png" alt="GitHub" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/twiter.png" alt="Twitter" />
                    </div>

                <div className="flex gap-50">
                    <div className="ml-70">
                    <p className="font-bold text-xl">Company</p>
                    <ul className="font-semibold text-neutral-500 mt-5">
                        <li className="">About Us</li>
                        <li className="">Tour Guide</li>
                        <li className="">Packages</li>
                        <li className="">Contact Us</li>
                    </ul>
                </div>

                <div className="">
                    <p className="font-bold text-xl">Resources</p>
                    <ul className="font-semibold text-neutral-500 mt-5">
                        <li className="">Free eBook</li>
                        <li className="">Development Tutorial</li>
                        <li className="">How to ~ Blog</li>
                        <li className="">Youtube Playlist</li>
                    </ul>
                </div>

                <div className="">
                    <p className="font-bold text-xl -mt-1">Extra Links</p>
                    <ul className="font-semibold text-neutral-500 mt-5">
                        <li className="">Customer Support</li>
                        <li className="">Terms & Conditions</li>
                        <li className="">Privacy Policy</li>
                    </ul>
                </div>
                </div>

                

                

            </div>

            <div className="h-18 border-t-1 flex items-center justify-center border-neutral-400">
                <p className="text-center text-gray-500">© 2026 LuxFly. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;