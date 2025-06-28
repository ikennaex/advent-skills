import { UserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const topStaff = [
  {
    id: 1,
    name: 'Grace Adebayo',
    role: 'Professional Nanny',
    location: 'Lagos, Nigeria',
    image: <UserRound />,
  },
  {
    id: 2,
    name: 'Tunde Balogun',
    role: 'Private Chef',
    location: 'Abuja, Nigeria',
    image: <UserRound />,
  },
  {
    id: 3,
    name: 'Esther Okoro',
    role: 'Housekeeper',
    location: 'Port Harcourt, Nigeria',
    image: <UserRound />,
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: <UserRound />,
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: <UserRound />,
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: <UserRound />,
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: <UserRound />,
  },
  {
    id: 4,
    name: 'Chinedu Eze',
    role: 'Driver',
    location: 'Enugu, Nigeria',
    image: <UserRound />,
  },
]

const Workers = () => {
  return (
    <div className='container mx-auto px-4 py-8'>

  {/* Filter Section */}
  <div className='bg-green-100 h-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-4 rounded-lg shadow-sm mb-6'>

    <div className='flex flex-col sm:flex-row gap-4 w-full'>
      <div className='flex flex-col'>
        <label htmlFor="location" className='text-sm text-gray-700 mb-1'>Filter by Location</label>
        <select
          id="location"
          className='w-full sm:w-52 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-200'
        >
          <option value="">All</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="role" className='text-sm text-gray-700 mb-1'>Filter by Role</label>
        <select
          id="role"
          className='w-full sm:w-52 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-200'
        >
          <option value="">All</option>
          <option value="Nanny">Nanny</option>
          <option value="Cleaner">Cleaner</option>
          <option value="Cook">Cook</option>
          <option value="Driver">Driver</option>
        </select>
      </div>
    </div>
  </div>

  {/* Staff Cards */}
  <div className='p-4'>
    <div className='flex flex-wrap justify-center gap-6'>
      {topStaff.map((staff) => {
        return (
          <div className='w-full sm:w-2/5 md:w-1/4 lg:w-1/5 bg-white border shadow-sm hover:shadow-md transition rounded-xl p-6 flex flex-col items-center' key={staff.name}>

            <div className='bg-green-100 p-6 rounded-full mb-4'>
              <UserRound className='text-green-600 w-10 h-10' />
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
</div>

  )
}

export default Workers