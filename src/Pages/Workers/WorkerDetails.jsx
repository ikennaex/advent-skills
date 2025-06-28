import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserRound, MapPin, Briefcase, Phone, ArrowLeft } from 'lucide-react';

const staff = {
  id: 1,
  name: 'Grace Adebayo',
  role: 'Professional Nanny',
  location: 'Lagos, Nigeria',
  image: <UserRound />,
};

const WorkerDetails = () => {
  const { id } = useParams(); // You could use this if you're routing by ID

  if (!staff) {
    return <div className="text-center mt-20 text-gray-600">Worker not found.</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 sm:p-10">

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center text-blue-700 hover:underline text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Workers
        </Link>

        {/* Avatar and Basic Info */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="bg-green-100 p-10 rounded-full shadow-inner">
            <UserRound className="text-green-700 w-14 h-14" />
          </div>

          <div className="text-center lg:text-left space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">{staff.name}</h2>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 text-sm">
              <Briefcase className="w-4 h-4" />
              <span>{staff.role}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{staff.location}</span>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="mt-10 border-t pt-6 space-y-4 text-gray-700 text-base">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>{staff.phone || '0701 234 5678'}</span>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Salary Expectation:</span> ₦70,000
            </p>
            <p>
              <span className="font-semibold">Experience:</span> {staff.experience || '2 years'}
            </p>
            <p>
              <span className="font-semibold">Availability:</span> {staff.availability || 'Immediate'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link to="https://wa.me/2347012345678" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl transition">
              Contact on WhatsApp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;
