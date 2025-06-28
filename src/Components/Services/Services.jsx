import React from 'react'
import { Briefcase, Users, Car, ChefHat, HeartPulse, ClipboardList } from "lucide-react";
import { img2 } from '../../imports';

const Services = () => {

  const services = [
  {
    title: "Nannies & Babysitters",
    description:
      "Caring, experienced, and trained to ensure your child's safety and happiness.",
    icon: Users,
  },
  {
    title: "Housekeepers",
    description:
      "Meticulous and organized individuals to help maintain your home.",
    icon: ClipboardList,
  },
  {
    title: "Drivers",
    description:
      "Reliable and safety-conscious professionals for personal or family driving needs.",
    icon: Car,
  },
  {
    title: "Cooks/Chefs",
    description:
      "From local to continental meals, our cooks bring taste and hygiene to your table.",
    icon: ChefHat,
  },
  {
    title: "Caregivers",
    description:
      "Trained support staff for the elderly or individuals with special needs.",
    icon: HeartPulse,
  },
  {
    title: "Personal Assistants/Errand Runners",
    description:
      "For homes or professionals who need trusted daily support.",
    icon: Briefcase,
  },
];

  return (
    <div className='container mx-auto'>
 <section className="container mx-auto px-6 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
        <p className="text-lg text-gray-500">What We Offer</p>
      </div>

      <div className='flex gap-5'>
      <div className='w-10/12'>
        <img className='w-full' src= {img2} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>

      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-700 text-base">
          Each placement is tailored to meet your unique needs
          whether <strong>part-time</strong>, <strong>full-time</strong>, 
          <strong> live-in</strong>, or <strong>live-out</strong>.
        </p>
      </div>
    </section>
    </div>
  )
}

export default Services