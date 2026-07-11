import React from 'react'
import { Send, Plane, MoveRight, PlaneTakeoff, PlaneLanding, Building2, Car, Search, ArrowUpDown } from 'lucide-react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [tripType, setTripType] = useState("round");
    const [tab, setTab] = useState("flights");

    return (
        <>
            <div className="relative mt-10 mb-10 flex justify-center mt-28">
                <img className='w-12/13 rounded-4xl flex justify-center ' src="src/assets/home (1).jpg" alt="" />
                <div className=" w-90 h-27 absolute bg-white self-end ml-211.5 mb-5 shadow-[0_0_20px_rgba(37,99,235,0.8)] rounded-4xl ">
                    <p className='flex items-center text-xl font-bold gap-35 mt-3 ml-8'>Know More <Link to="/about"> <MoveRight className='cursor-pointer -rotate-45 hover:rotate-0 hover:transition-transform duration-150' /></Link> </p>
                    <p className='ml-8 mt-1 text-sm font-bold'>Awesome Places.</p>
                    <p className='ml-8 w-60 leading-4 font-semibold text-sm text-neutral-700'>Discover The World One Adventure At A Time!</p>
                </div>

                <li className='absolute h-0.5 w-70 text-neutral-400 border-1 list-none rotate-90 mt-70 -ml-270'></li>
                <div className="absolute h-11.5 w-11.5 rounded-full -ml-270 mt-27 border-1 border-neutral-400 bg-white flex items-center justify-center">

                    <PlaneTakeoff className=' p-0.5 ' />
                </div>
                <div className="absolute h-11.5 w-11.5 rounded-full -ml-270 mt-95 border-1 border-neutral-400 bg-white flex items-center justify-center">

                    <PlaneLanding className=' p-0.5 ' />
                </div>
                <p className='absolute -ml-181 font-semibold mt-31'>ELEVATE YOUR TRAVEL JOURNEY</p>
                <div className=" absolute font-bold -ml-150 mt-37 leading-15 text-[#2E3336] text-6xl ">

                    <p>Experience</p>
                    <p>The Magic Of</p>
                    <p>Flight!</p>
                </div>

                <div className='absolute ml-157'>
                    <Link to="/flight"> <button className=' h-11 w-43 bg-black hover:bg-blue-800 hover:transition-colors duration-150  text-white rounded-3xl cursor-pointer text-sm tracking-wide font-bold mt-95 -ml-200'>Book A Trip Now</button> </Link>

                </div>
                <div className="absolute ml-130 ">
                    <Link to="/tour">
                        <button className='absolute h-11.5 w-11.5 bg-white mt-95 rounded-full -ml-140 flex justify-center items-center cursor-pointer hover:-rotate-45 hover:transition-transform duration-200 hover:scale-103 shadow-[0_0_20px_rgba(37,99,235,0.8)]'><Plane className='p-0.5 ' /></button>
                    </Link>
                </div>

            </div>

            <div className="w-65 h-14 mb-5 ml-17 flex rounded-full z-10  border-neutral-400 border relative">
                <p className='font-semibold ml-8 self-center'>Follow</p>
                <div className="h-12.5 w-40 ml-4 mt-0.5 gap-2  rounded-full border flex border-neutral-300">
                    <img className='h-6 cursor-pointer ml-4 self-center' src="src/assets/facebook.png" alt="" />
                    <img className='h-6 cursor-pointer self-center' src="src/assets/instagram-53.png" alt="" />
                    <img className='h-6 ml-1 cursor-pointer self-center' src="src/assets/github.png" alt="" />
                    <img className='h-6 ml-1 cursor-pointer self-center' src="src/assets/twiter.png" alt="" />
                </div>
            </div>

            <div className="relative  flex gap-13 -mt-17 mb-5 ">
                <img className='ml-120 w-40 h-10' src="src/assets/airbnb.png" alt="" />
                <img className='w-40 h-8 mt-1.5' src="src/assets/Booking.com_Logo_Grey.svg.webp" alt="" />
                <img className='w-36 h-14 -mt-1' src="src/assets/Trivago.avif" alt="" />
                <img className='w-40 h-10 mt-0.5' src="src/assets/images (1).png" alt="" />
            </div>

            {/* <div className="w-11/12 flex justify-center pb-6 pt-10">
                <p className='font-semibold text-3xl self-center ml-30'>Flight Booking</p>
            </div> */}

            <div className="border relative border-neutral-300 h-40 flex justify-center rounded-4xl bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] ml-14 mb-20 mt-10 w-11/12">
                <div className=" flex gap-3  h-3 mt-8 -ml-220">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="tripType"
                            value="roundTrip"
                            className="w-4 h-4 accent-black"
                        />
                        <span className="text-sm text-black font-semibold">Round trip</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="tripType"
                            value="roundTrip"
                            className="w-4 h-4 accent-black"
                        />
                        <span className="text-sm text-black font-semibold">One way</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="tripType"
                            value="roundTrip"
                            className="w-4 h-4 accent-black"
                        />
                        <span className="text-sm text-black font-semibold">Multi-city</span>
                    </label>
                </div>
                <div className="border absolute border-neutral-300 h-18 flex justify-center rounded-3xl bg-white  -ml-220 mb-20 mt-16 w-70">
                    <p className='text-[11px] font-semibold text-neutral-500 absolute -ml-50 mt-3.5'>FROM</p>
                    <input type="text" placeholder='' />
                </div>
                <ArrowUpDown className='bg-black absolute text-white p-2 z-10 cursor-pointer h-8 w-8 rounded-full hover:rotate-180 hover:transition-transform duration-500 mt-21 -ml-148' />
                <div className="border absolute border-neutral-300 h-18 flex justify-center rounded-3xl bg-white  -ml-75 mb-20 mt-16 w-70"></div>

            </div>



        </>
    )
}

export default Home
