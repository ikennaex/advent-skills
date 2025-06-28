import React from 'react';
import { Link } from 'react-router-dom';
import {
  Baby,
  Utensils,
  Car,
  BrushCleaning,
  GraduationCap,
  HeartHandshake,
  BrainCog,
} from 'lucide-react';

const categories = [
  { name: 'Nanny', link: '/nanny', icon: Baby },
  { name: 'Chef', link: '/chef', icon: Utensils },
  { name: 'Driver', link: '/driver', icon: Car },
  { name: 'Professional Maid', link: '/professionalmaid', icon: BrushCleaning },
  { name: 'Tutor', link: '/tutor', icon: GraduationCap },
  { name: 'Elder Caregiver', link: '/caregiver', icon: HeartHandshake },
];

const PopularWorkCategories = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Popular Work Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
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
    </div>
  );
};

export default PopularWorkCategories;

