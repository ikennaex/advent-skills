import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";

const WorkerList = () => {
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

  const approvedWorkers =  workers.filter((worker) => worker.approved === true)

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700 text-left text-sm">
          <tr>
            <th className="px-6 py-3 font-semibold">Name</th>
            <th className="px-6 py-3 font-semibold">Gender</th>
            <th className="px-6 py-3 font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {approvedWorkers.map((worker, index) => (
            <tr key={index} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">{worker.name}</td>
              <td className="px-6 py-4">{worker.gender}</td>
              <td className="px-6 py-4">{worker.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerList;
