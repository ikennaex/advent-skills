import React from 'react'
import { Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <div className="flex gap-6 items-center text-sm font-medium text-gray-600">
        <Link to= "/admin" >
        <button className="flex items-center gap-2 hover:text-blue-700 transition">
          <Users className="w-4 h-4" />
          Workers
        </button>
        </Link>

        <Link to= "/admin/requests" >
        <button className="flex items-center gap-2 hover:text-blue-700 transition">
          <Clock className="w-4 h-4" />
          Pending Requests
        </button>
        </Link>
      </div>
    </nav>

  )
}

export default AdminNav