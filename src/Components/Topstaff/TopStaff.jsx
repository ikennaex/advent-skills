import React from 'react'

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
  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
      {topStaff.map((staff) => (
        <div
          key={staff.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center"
        >
          <img
            src={staff.image}
            alt={staff.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
          <p className="text-sm text-customGreen font-medium">{staff.role}</p>
          <p className="text-sm text-gray-500">{staff.location}</p>
        </div>
      ))}
    </div>

    <button className='lg:rounded-2xl lg:px-8 flex gap-2 mx-auto mt-7 items-center bg-customYellow p-4 rounded-2xl font-bold  cursor-pointer'>View all staff</button>
  </div>
  )
}

export default TopStaff