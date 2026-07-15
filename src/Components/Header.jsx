import { Link } from "react-router-dom";
import { User, X, Menu } from "lucide-react";
import { useState } from "react";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-[100] w-full h-[max(4.4271vw,68px)] backdrop-blur-xl border-b border-neutral-300 bg-white/80 flex items-center px-[3.6458vw] justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            className="h-[max(3.5vw,48px)] w-auto cursor-pointer"
                            src="src/assets/Primary-logo.png"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex gap-[max(2vw,20px)] font-semibold text-gray-900 text-[max(0.9115vw,14px)]">
                        <Link to="/tour">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">Tour</li>
                        </Link>
                        <Link to="/about">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">About</li>
                        </Link>
                        <Link to="/flight">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">Flights</li>
                        </Link>
                        <Link to="/guide">
                            <li className="cursor-pointer hover:text-sky-700 transition-colors duration-200">Travel Guide</li>
                        </Link>
                    </ul>
                </div>

                <div className="flex items-center gap-[0.7812vw]">
                    <button className="hidden md:flex items-center justify-center gap-2 px-[1.5vw] h-[max(2.8646vw,44px)] rounded-full border border-neutral-300 bg-white font-semibold text-[max(0.8vw,13px)] text-gray-900 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                        <User className="w-[max(1.1vw,18px)] h-[max(1.1vw,18px)]" />
                        My Trips
                    </button>

                    <Link to="/flight">
                        <button className="px-[1.5vw] h-[max(2.8646vw,44px)] min-w-[120px] rounded-full bg-[#1B3BB4] text-white font-bold text-[max(0.8vw,13px)] hover:bg-[#16339A] transition-all duration-200 cursor-pointer">
                            Get Ticket
                        </button>
                    </Link>

                    <button
                        className="md:hidden p-2 ml-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-300 flex flex-col p-6 gap-4 md:hidden shadow-xl">
                        <Link to="/tour" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-900">Tour</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-900">About</Link>
                        <Link to="/flight" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-900">Flights</Link>
                        <Link to="/guide" onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-900">Travel Guide</Link>
                        <hr className="border-neutral-100" />
                        <button className="flex items-center gap-2 font-semibold text-gray-900">
                            <User size={18} /> My Trips
                        </button>
                    </div>
                )}
            </nav>

        </>
    );
}

export default Header;