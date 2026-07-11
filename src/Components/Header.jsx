import { Link } from "react-router-dom";
import { User, } from "lucide-react";
import { useState } from "react"; 

function Header() {

    return (
        <>
            <div className="fixed top-0   left-0 z-50 w-full h-17 backdrop-blur-xl border-b-1 border-neutral-300 flex items-center">

                <Link to="/">
                    <img
                        className="h-17 ml-8 cursor-pointer"
                        src="src/assets/Primary-logo.png"
                        alt="Logo"
                    />
                </Link>

                <div className="flex-1">
                    <ul className="flex justify-center gap-8 font-semibold text-gray-900">
                        <Link to="/tour">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">
                                Tour
                            </li>
                        </Link>

                        <Link to="/about">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">
                                About
                            </li>
                        </Link>

                        <Link to="/flight">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">
                                Flights
                            </li>
                        </Link>

                        <Link to="/guide">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">
                                Travel Guide
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="flex items-center gap-3 mr-8">

                    <button 
                     className="flex items-center justify-center gap-2 w-32 h-11 rounded-full border border-neutral-300 bg-white font-semibold text-sm text-gray-900 hover:bg-white/50 transition-all duration-200 cursor-pointer">
                        <User className="w-5 h-5" />
                        My Trips
                    </button>

                    <Link to="/flight">
                        <button className="w-32 h-11 rounded-full bg-[#1B3BB4] text-white font-bold text-sm hover:bg-[#16339A] transition-all duration-200 cursor-pointer">
                            Get Ticket
                        </button>
                    </Link>

                </div>

                

            </div>
            
        </>
    );
}

export default Header;