import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Footer() {
    return (
        <footer className="w-full bg-[#fbfbfb] text-neutral-800 font-sans selection:bg-neutral-200">
            {/* Top Section: Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                
                {/* Left Side: Logo, Tagline, Socials */}
                <div className="flex flex-col max-w-xs">
                    {/* Logo Group */}
                    <div className="flex items-center gap-2 mb-5">
                        <Link to="/home">
                            <img 
                                className="h-7 w-auto cursor-pointer object-contain" 
                                src="src/assets/Primary-logo.png" 
                                alt="LuxFly Logo" 
                            />
                        </Link>
                        <p className="text-[22px] font-bold tracking-wide text-neutral-900">LuxFly</p>
                    </div>

                    {/* Tagline */}
                    <p className="text-zinc-500 font-medium text-[15px] leading-relaxed mb-6">
                        Discover the world one adventure at a time <br />
                        Life is short book the trip.
                    </p>

                    {/* Social Media Circular Buttons */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                            <img className="h-4 w-4 object-contain opacity-70" src="src/assets/twiter.png" alt="Twitter" />
                        </a>
                        {/* Highlights the active/colored button matching the image layout */}
                        <a href="#" className="w-9 h-9 rounded-full bg-[#1d9bf0] flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                            <img className="h-4 w-4 object-contain brightness-0 invert" src="src/assets/github.png" alt="Behance/LinkedIn Link" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                            <img className="h-4 w-4 object-contain opacity-70" src="src/assets/facebook.png" alt="Facebook" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-colors">
                            <img className="h-4 w-4 object-contain opacity-70" src="src/assets/instagram-53.png" alt="Instagram" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Navigation Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-24 xl:gap-32">
                    {/* Company */}
                    <div>
                        <p className="font-bold text-[16px] text-neutral-900 tracking-wide">Company</p>
                        <ul className="text-zinc-500 font-medium text-[15px] mt-5 space-y-3.5">
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Tour Guide</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Packages</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Contact Us</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <p className="font-bold text-[16px] text-neutral-900 tracking-wide">Resources</p>
                        <ul className="text-zinc-500 font-medium text-[15px] mt-5 space-y-3.5">
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Free eBook</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Development Tutorial</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">How to ~ Blog</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Youtube Playlist</li>
                        </ul>
                    </div>

                    {/* Extra Links */}
                    <div className="col-span-2 sm:col-span-1">
                        <p className="font-bold text-[16px] text-neutral-900 tracking-wide">Extra Links</p>
                        <ul className="text-zinc-500 font-medium text-[15px] mt-5 space-y-3.5">
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Customer Support</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Terms & Conditions</li>
                            <li className="hover:text-neutral-900 cursor-pointer transition-colors">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Section: Copyright Divider Bar */}
            <div className="w-full border-t border-neutral-200 py-8 bg-[#fbfbfb]">
                <p className="text-center text-zinc-400 font-medium text-[14px]">
                    @ 2026 LuxFly All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;