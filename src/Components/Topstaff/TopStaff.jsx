import { UserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const topStaff = [
  {
    id: 1,
    name: 'Grace Adebayo',
    role: 'Professional Nanny',
    location: 'Lagos, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 2,
    name: 'Tunde Balogun',
    role: 'Private Chef',
    location: 'Abuja, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 3,
    name: 'Esther Okoro',
    role: 'Housekeeper',
    location: 'Port Harcourt, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: 'https://cdn-icons-png.flaticon.com/128/10412/10412383.png',
  },
]

const TopStaff = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-customGreen">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
      Top Rated Staff
    </h2>
    <div>
<div className='flex flex-wrap justify-center gap-6'>
      {topStaff.map((staff) => {
        return (
          <div className='w-full sm:w-2/5 md:w-1/4 lg:w-1/5 bg-white border shadow-sm hover:shadow-md transition rounded-xl p-6 flex flex-col items-center' key={staff.name}>

            <div className='bg-gray-200 p-6 rounded-full mb-4'>
              <UserRound className='text-gray-600 w-10 h-10' />
            </div>

            <div className='py-2 text-center space-y-1'>
              <p className='font-semibold text-lg'>{staff.name}</p>
              <p className='text-gray-600'>{staff.role}</p>
              <p className='text-gray-500 text-sm'>{staff.location}</p>
              <p className='text-blue-700 font-semibold text-sm'>₦70,000</p>
            </div>

            <Link to="/workers/:id" className='w-full mt-4'>
              <button className='w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl transition'>
                View Profile
              </button>
            </Link>
          </div>
        )
      })}
    </div>
  </div>

    <Link to="/workers" >
    <button className='lg:rounded-2xl lg:px-8 flex gap-2 mx-auto mt-7 items-center bg-customYellow p-4 rounded-2xl font-bold  cursor-pointer'>View all staff</button>
    </Link>
  </div>
  )
}

export default TopStaff