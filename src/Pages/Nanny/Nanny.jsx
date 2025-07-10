import { UserRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";


// states 

const statesOfNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT"
];


const Nanny = () => {
  const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [locationFilter, setLocationFilter] = useState("");


    useEffect(() => {
    const getWorkers = async () => {
        setLoading(true);
        try {
        const response = await axios.get(`${baseUrl}/workers`);
        setWorkers(response.data);
        } catch (err) {
        console.log(err);
        } finally {
        setLoading(false);
        }
    };

    getWorkers();
    }, []);

    const approvedWorkers = workers.filter((worker) => worker.approved === true);

    const filteredWorkers = approvedWorkers.filter((worker) => {
    const locationMatch = locationFilter
        ? worker.stateofresidence.toLowerCase().includes(locationFilter.toLowerCase())
        : true;
    const roleMatch = worker.role?.toLowerCase() === "nanny";
    return locationMatch && roleMatch;
    });


    if (loading) {
        return <Loader/>
    }

    return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center my-6">Nannies</h2>
        {/* Filter Section */}
        <div className="bg-green-100 h-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-4 rounded-lg shadow-sm mb-6">
            
        <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            <div className="flex flex-col">
            <label htmlFor="location" className="text-sm text-gray-700 mb-1">
                Filter by Location
            </label>
            <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full sm:w-52 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-200"
            >
                <option value="">All States</option>
                {statesOfNigeria.map((state) => (
                <option key={state} value={state}>
                    {state} State
                </option>
                ))}
            </select>
            </div>

            
        </div>
        </div>

        {/* Staff Cards */}
        <div className="p-4">
        <div className="flex flex-wrap justify-center gap-6">
            {filteredWorkers.map((staff) => {
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
                    <p className="text-gray-500 text-sm">
                    {staff.stateofresidence}, NG
                    </p>
                </div>

                <Link to={`/workers/${staff._id}`} className="w-full mt-4">
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl transition">
                    View Profile
                    </button>
                </Link>
                </div>
            );
            })}
        </div>
        </div>
    </div>
    )
}

export default Nanny