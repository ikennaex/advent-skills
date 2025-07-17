import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Baby,
  Car,
  Utensils,
  Brush,
  GraduationCap,
  HeartHandshake,
  Home,
  Shirt,
  Leaf,
  Droplets,
  UserRound // 👈 new import
} from 'lucide-react';

const categories = [
  { name: 'Nanny', link: '/nanny', icon: Baby },
  { name: 'Chef', link: '/chef', icon: Utensils },
  { name: 'Driver', link: '/driver', icon: Car },
  { name: 'Professional Maid', link: '/professionalmaid', icon: Brush },
  { name: 'Tutor', link: '/tutor', icon: GraduationCap },
  { name: 'Elder Caregiver', link: '/caregiver', icon: HeartHandshake },
  { name: 'Housekeeper', link: '/housekeeper', icon: Home },
  { name: 'General Cleaner', link: '/general-cleaner', icon: Brush },
  { name: 'Laundry Person', link: '/laundry', icon: Shirt },
  { name: 'Gardener', link: '/gardener', icon: Leaf },
  { name: 'Pool Cleaner', link: '/pool-cleaner', icon: Droplets },
  { name: 'Personal Assistant', link: '/personal-assistant', icon: UserRound } // 👈 new entry
];


const PopularWorkCategories = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Popular Work Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Link
              to={category.link}
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center rounded-2xl shadow hover:shadow-lg transition-all duration-200 border hover:border-blue-500 bg-white hover:bg-gray-50"
            >
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-md font-semibold text-gray-700">{category.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium hover:underline"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default PopularWorkCategories;
