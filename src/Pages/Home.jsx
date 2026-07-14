import React from 'react'
import { Send, Plane, MoveRight, PlaneTakeoff, PlaneLanding, Building2, Car, Search, ArrowUpDown, } from 'lucide-react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [tripType, setTripType] = useState("round");
    const [tab, setTab] = useState("flights");

    return (
        <>
            <div className="relative mb-[2.6042vw] flex justify-center lg:mt-[7.2917vw] md:mt-[10vw] sm:mt-[13vw] max-sm:mt-[16vw]">
                <div className="relative w-11/12 max-w-[2770px] rounded-[max(2.0833vw,14px)] overflow-hidden flex justify-center">
                    <img
                        className="w-full h-auto object-cover block rounded-[max(2.0833vw,14px)]"
                        src="src/assets/home (1).jpg"
                        alt="Flight Hero Background"
                    />

                    <div className="w-[max(23.4375vw,160px)] h-[max(7.0312vw,64px)] absolute bg-white bottom-[4%] right-[2%] shadow-[0_0_20px_rgba(37,99,235,0.8)] rounded-[max(2.0833vw,14px)] flex flex-col justify-center p-[2vw] sm:p-[1.3021vw] z-20">
                        <div className="flex items-center justify-between">
                            <p className="text-[max(1.3021vw,10px)] text-nowrap font-bold text-neutral-900">
                                Know More
                            </p>
                            <Link to="/about">
                                <MoveRight className="cursor-pointer -rotate-45 hover:rotate-0 hover:transition-transform duration-150 text-neutral-800 w-[max(1.5vw,14px)] h-[max(1.5vw,14px)]" />
                            </Link>
                        </div>
                        <p className="mt-[0.1920vw] text-[max(0.9115vw,9px)] font-bold text-neutral-950">
                            Awesome Places.
                        </p>
                        <p className="w-full leading-tight font-semibold text-[max(0.9115vw,9px)] text-neutral-700">
                            Discover The World One Adventure At A Time!
                        </p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-start px-[6%] z-10">
                        <div className="flex gap-[3.5vw] sm:gap-[2.5vw] h-[60%] max-w-[65%] relative">

                            <div className="hidden min-[600px]:flex flex-col items-center justify-between h-full relative shrink-0">
                                <div className="h-[max(2.9948vw,24px)] w-[max(2.9948vw,24px)] rounded-full border border-neutral-400 bg-white flex items-center justify-center z-10">
                                    <PlaneTakeoff className="p-0.5 text-neutral-800 w-[60%] h-[60%]" />
                                </div>
                                <div className="absolute top-[max(30px)] bottom-[max(30px)] w-[1px] bg-neutral-500"></div>
                                <div className="h-[max(2.9948vw,24px)] w-[max(2.9948vw,24px)] -mt- rounded-full border border-neutral-400 bg-white flex items-center justify-center z-10">
                                    <PlaneLanding className="p-0.5 text-neutral-800 w-[60%] h-[60%]" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between h-full py-[0.5vw]">
                                <div>
                                    <p className="font-semibold text-neutral-800 tracking-wider text-[max(1.0417vw,10px)]">
                                        ELEVATE YOUR TRAVEL JOURNEY
                                    </p>
                                    <h1 className="font-bold text-[#2E3336] leading-[1.1] text-[max(3.9062vw,22px)] mt-[1vw]">
                                        Experience <br />
                                        The Magic Of <br />
                                        Flight!
                                    </h1>
                                </div>

                                <div className="flex items-center gap-[1.5vw] mt-auto">
                                    <Link to="/flight">
                                        <button className="h-[max(2.8646vw,32px)] px-[3.5vw] sm:px-[2.5vw] bg-black hover:bg-blue-800 transition-colors duration-200 text-white rounded-full cursor-pointer text-[max(0.9115vw,10px)] tracking-wide font-bold">
                                            Book A Trip Now
                                        </button>
                                    </Link>
                                    <Link to="/tour">
                                        <button className="h-[max(2.9948vw,32px)] w-[max(2.9948vw,32px)] bg-white rounded-full flex justify-center items-center cursor-pointer hover:-rotate-45 transition-transform duration-200 hover:scale-103 shadow-[0_0_20px_rgba(37,99,235,0.8)]">
                                            <Plane className="p-0.5 text-neutral-800 w-[60%] h-[60%]" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full flex flex-col lg:gap-[11vw] lg:flex-row items-center lg:items-start px-4 sm:px-0">
                <div className="w-full max-w-[280px] xs:w-[260px] sm:w-[max(16.9271vw,220px)] h-auto sm:h-[max(3.6458vw,48px)] py-3 sm:py-0 mb-[6vw] sm:mb-[2vw] lg:ml-[4.4271vw] flex flex-col sm:flex-row items-center justify-center sm:justify-start rounded-[24px] sm:rounded-full z-10 border-neutral-400 border relative gap-2 sm:gap-0">
                    <p className="font-semibold sm:ml-[2.0833vw] text-[13px] sm:text-[max(0.9115vw,11px)] shrink-0">
                        Follow
                    </p>
                    <div className="h-[38px] sm:h-[max(3.2552vw,40px)] w-[180px] xs:w-[150px] sm:w-[max(10.4167vw,120px)] sm:ml-[1.3450vw] sm:mr-[0.2vw] gap-[12px] sm:gap-[0.5208vw] rounded-full border flex border-neutral-300 items-center justify-evenly px-2">
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/facebook.png" alt="Facebook" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/instagram-53.png" alt="Instagram" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/github.png" alt="GitHub" />
                        <img className="h-[16px] sm:h-[max(1.5625vw,16px)] cursor-pointer" src="src/assets/twiter.png" alt="Twitter" />
                    </div>
                </div>

                <div className="relative w-full flex flex-wrap items-center justify-center lg:justify-start -mt-[0.5vw] lg:pl-[4.4271vw] gap-x-[6vw] gap-y-[4vw] sm:gap-[3.3854vw]  mb-[1.3021vw]">
                    <img className="w-[75px] sm:w-[max(10.4167vw,80px)] h-auto object-contain" src="src/assets/airbnb.png" alt="Airbnb" />
                    <img className="w-[75px] sm:w-[max(10.4167vw,80px)] h-auto object-contain" src="src/assets/Booking.com_Logo_Grey.svg.webp" alt="Booking.com" />
                    <img className="w-[70px] sm:w-[max(9.375vw,72px)] h-auto object-contain" src="src/assets/Trivago.avif" alt="Trivago" />
                    <img className="w-[75px] sm:w-[max(10.4167vw,80px)] h-auto object-contain" src="src/assets/images (1).png" alt="Partner Logo" />
                </div>
            </div>


            <div className="mx-[3.6458vw] mb-[5.2083vw] mt-[2.6042vw] w-[calc(100%-7.2916vw)]">
      <div className="border border-neutral-300 min-h-[max(10.4167vw,150px)] flex flex-col justify-center rounded-[max(2.0833vw,20px)] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] p-[2.6042vw] lg:py-[1.5vw]">
        
        <div className="flex gap-[1.5vw] mb-[1.5vw] flex-wrap">
          {['roundTrip', 'oneWay', 'multiCity'].map((type, idx) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value={type}
                defaultChecked={idx === 0}
                className="w-[max(1.0417vw,14px)] h-[max(1.0417vw,14px)] accent-black"
              />
              <span className="text-[max(0.9115vw,12px)] text-black font-semibold whitespace-nowrap">
                {type === 'roundTrip' ? 'Round trip' : type === 'oneWay' ? 'One way' : 'Multi-city'}
              </span>
            </label>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[1vw] w-full">
          <div className="flex flex-col sm:flex-row items-center gap-[1vw] lg:gap-0 relative w-full lg:w-[38%]">
            <div className="border border-neutral-300 h-[max(4.6875vw,56px)] flex flex-col justify-center px-[1.2vw] rounded-[max(1.5625vw,16px)] bg-white w-full">
              <p className="text-[max(0.7161vw,9px)] font-semibold text-neutral-500 uppercase">From</p>
              <p className="text-[max(1.1vw,16px)] font-bold text-black truncate">New York (JFK)</p>
            </div>

            <div className="relative lg:absolute left-1/2  max-sm:-ml-[85vw] lg:-ml-[max(1.04vw,19px)] z-10 md:flex md:-ml-[1.5vw] sm:absolute sm:-ml-[2vw] md:absolute">
              <div className="bg-black text-white p-[0.5vw] cursor-pointer rounded-full hover:rotate-180 transition-transform duration-500 flex items-center justify-center h-[max(2.0833vw,32px)] w-[max(2.0833vw,32px)] border-2 border-white shadow-sm">
                <ArrowUpDown size={16} className="w-full h-full" />
              </div>
            </div>

            <div className="border border-neutral-300 lg:ml-[0.5vw] h-[max(4.6875vw,56px)]  flex flex-col justify-center px-[1.2vw] rounded-[max(1.5625vw,16px)] bg-white w-full lg:pl-[2vw]">
              <p className="text-[max(0.7161vw,9px)] sm:pl-[1.5vw] md:pl-[1vw] font-semibold text-neutral-500 uppercase">To</p>
              <p className="text-[max(1.1vw,16px)] sm:pl-[1.5vw] md:pl-[1vw] font-bold text-black truncate">New Delhi (DEL)</p>
            </div>
          </div>

          <div className="border border-neutral-300 h-[max(4.6875vw,56px)] flex flex-col justify-center px-[1.2vw] rounded-[max(1.5625vw,16px)] bg-white w-full lg:w-[15%]">
            <p className="text-[max(0.7161vw,9px)] font-semibold text-neutral-500 uppercase">Departure</p>
            <p className="text-[max(1.1vw,16px)] font-bold text-black">14-07-2026</p>
          </div>

          <div className="border border-neutral-300 h-[max(4.6875vw,56px)] flex flex-col justify-center px-[1.2vw] rounded-[max(1.5625vw,16px)] bg-white w-full lg:w-[15%]">
            <p className="text-[max(0.7161vw,9px)] font-semibold text-neutral-500 uppercase">Return</p>
            <p className="text-[max(1.1vw,16px)] font-bold text-black">18-07-2026</p>
          </div>

          <div className="border border-neutral-300 h-[max(4.6875vw,56px)] flex flex-col justify-center px-[1.2vw] rounded-[max(1.5625vw,16px)] bg-white w-full lg:w-[10%]">
            <p className="text-[max(0.7161vw,9px)] font-semibold text-neutral-500 uppercase">Guests</p>
            <p className="text-[max(1.1vw,16px)] font-bold text-black">2</p>
          </div>

          <button className="bg-black hover:bg-neutral-800 cursor-pointer transition-colors h-[max(4.6875vw,56px)] lg:ml-[5vw] aspect-square rounded-[max(1.2625vw,16px)] flex items-center justify-center w-full lg:w-auto lg:flex-1 max-w-[max(4.6875vw,56px)]">
            <Search className="text-white w-[max(1.5vw,20px)] h-[max(1.5vw,20px)]" />
          </button>
        </div>
      </div>
    </div>





        </>
    )
}

export default Home