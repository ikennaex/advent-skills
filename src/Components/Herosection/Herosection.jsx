import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import "./herosection.css"
import { img1 } from '../../imports';

const Herosection = () => {
  return (
<div className="">
      <div className="bg-customGreen">
        <div className="lg:px-10 pt-14 container mx-auto px-7  h-fit lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="lg:w-1/2 ">
            <p className="text-customYellow font-bold">
              Advent Skills Domestic Recruiters
            </p>
            <h1 className="lg:text-7xl herotext leading-tight font-black text-5xl text-white pb-6 slide-in-bottom">
            Trusted Domestic Help, Tailored to Your Needs
            </h1>
            <p className="lg:text-lg text-white lg:w-120 slide-in-left ">
            At Advent Skills Domestic Recruitment, we connect families and homes with skilled, vetted, and reliable domestic workers from nannies and housekeepers to cooks and caregivers. Your peace of mind starts here.
            </p>

            <div className='flex gap-3'>
            <div className="pt-9 flex items-center text-sm lg:text-md gap-6 slide-in-left2 text-customGreen">
              <a target="_blank" href="https://wa.me/2348135217518">
                <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold  cursor-pointer">
                  <FaSuitcase size={27} />
                  Hire a worker
                </button>
              </a>
            </div>

            <div className="pt-9 flex items-center text-sm lg:text-md gap-6 slide-in-left2 text-customGreen">
              <a target="_blank" href="https://wa.me/2348135217518">
                <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold  cursor-pointer">
                  <FaHandsHelping size={27} />
                  Be a worker
                </button>
              </a>
            </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 pt-5 lg:pt-0 lg:mb-0">
            <img
              className="w-2/3 rounded-3xl slide-in-blurred-bottom"
              src= {img1}
              alt="domestic staff"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection