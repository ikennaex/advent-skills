import { UserRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const PendingRequests = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/workers`);
        setWorkers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getWorkers();
  }, []);

  const unApprovedWorkers =  workers.filter((worker) => worker.approved !== true)

  return (
    <div className="container mx-auto">
      <AdminNav />
      <div className="px-6 py-6">
        <p className="text-2xl py-3">Approve or Decline Worker Requests</p>

        <div className="flex flex-wrap justify-center gap-6">
          {unApprovedWorkers.map((staff) => {
            return (
              <div
                className="w-full sm:w-2/5 md:w-1/4 lg:w-1/5 bg-white border shadow-sm hover:shadow-md transition rounded-xl p-6 flex flex-col items-center"
                key={staff.name}
              >
                <div className="bg-green-100 p-6 rounded-full mb-4">
                  <UserRound className="text-green-600 w-10 h-10" />
                </div>

                <div className="py-2 text-center space-y-1">
                  <p className="font-semibold text-lg">{staff.name}</p>
                  <p className="text-gray-600">{staff.role}</p>
                  <p className="text-gray-500 text-sm">{staff.gender}</p>
                </div>

                <Link to={`/approveworkers/${staff._id}`} className="w-full mt-4">
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl transition">
                    View Request Details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;
