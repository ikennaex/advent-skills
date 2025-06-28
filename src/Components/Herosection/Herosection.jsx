import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import "./herosection.css"
import { img1 } from '../../imports';

const Herosection = () => {
  return (
<div className="">
      <div className="bg-customGreen">
      <div className="container mx-auto px-7 lg:px-10 py-14 lg:py-28 flex flex-col lg:flex-row items-center lg:justify-between gap-12 ">
  
  {/* Left Side - Text & Buttons */}
  <div className="w-full lg:w-1/2">
    <p className="text-customYellow font-bold">
      Advent Skills Domestic Recruiters
    </p>
    <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight pb-6 slide-in-bottom herotext">
      Trusted Domestic Staffing Solutions for Every Home
    </h1>
    <p className="text-white text-base lg:text-lg slide-in-left">
      At Advent Skills Domestic Recruitment, we connect families and homes with skilled, vetted, and reliable domestic workers from nannies and housekeepers to cooks and caregivers. Your peace of mind starts here.
    </p>

    <div className="flex flex-wrap gap-4 pt-9 slide-in-left2">
      <a href="https://wa.me/2348135217518" target="_blank" rel="noopener noreferrer">
        <button className="bg-customYellow text-black font-bold p-4 rounded-2xl flex items-center gap-2 lg:px-8">
          <FaSuitcase size={24} />
          Hire a Domestic Worker
        </button>
      </a>

      <a href="https://wa.me/2348135217518" target="_blank" rel="noopener noreferrer">
        <button className="bg-customYellow text-black font-bold p-4 rounded-2xl flex items-center gap-2 lg:px-8">
          <FaHandsHelping size={24} />
          Register as a Worker
        </button>
      </a>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-5 lg:pt-0">
    <img
      className="w-2/3 rounded-3xl slide-in-blurred-bottom"
      src={img1}
      alt="domestic staff"
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default Herosection