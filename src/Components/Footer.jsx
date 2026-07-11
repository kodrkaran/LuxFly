import { Link } from "react-router-dom";
import {User, } from "lucide-react";

function Header() {
    return (
        <>
            <div className="bg-transparent w-full h-17   border-b-1 border-neutral-300 flex items-center">
                <img className="h-17 ml-8 cursor-pointer" src="src/assets/Primary-logo.png" alt="" />

                <div className="w-full  ">

                    <ul className="list-none flex gap-7 font-semibold justify-center">
                        <li className="cursor-pointer hover:text-sky-700">Tour</li>
                        <li className="cursor-pointer hover:text-sky-700">About</li>
                        <li className="cursor-pointer hover:text-sky-700">Flights</li>
                        <li className="cursor-pointer hover:text-sky-700">Travel Guide</li>
                    </ul>

                </div>

                <div className="flex gap-0">
                    <button className="cursor-pointer text-nowrap mr-2  pl-2 pr-2 border-1 hover:bg-[#f1f1f1] hover:transition-color duration-200 flex items-center justify-center gap-2 border-neutral-400 text-black font-semibold text-sm w-30 rounded-full h-11 "> <User className="h-5 w-5"/>My Trips</button>
                    <button className="cursor-pointer text-nowrap mr-10  pl-2 pr-2 bg-[#1B3BB4] text-white font-bold  text-sm w-30 rounded-full h-11">Get Ticket</button>
                </div>

            </div>
        </>
    );
}

export default Header;