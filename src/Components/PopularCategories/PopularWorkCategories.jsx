import React from 'react'
import { Link } from 'react-router-dom' // or next/link if using Next.js

const categories = [
  { name: 'Nanny', link: '/nanny' },
  { name: 'Chef', link: '/chef' },
  { name: 'Driver', link: '/driver' },
  { name: 'Professional Maid', link: '/professionalmaid' },
  { name: 'Tutor', link: '/tutor' },
  { name: 'Elder Caregiver', link: '/caregiver' },
]

const PopularWorkCategories = () => {
  return (
<div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
    Popular Work Categories
  </h2>

  <div className="grid grid-cols-2 gap-6">
    {categories.map((category, index) => (
      <Link
        to={category.link}
        key={index}
        className="block p-6 text-center rounded-2xl shadow hover:shadow-lg transition-all duration-200 border hover:border-primary bg-gray-50 hover:bg-white"
      >
        <span className="text-lg font-semibold text-gray-700">{category.name}</span>
      </Link>
    ))}
  </div>
</div>
  )
}

export default PopularWorkCategories
