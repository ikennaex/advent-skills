import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  UserRound,
  MapPin,
  Briefcase,
  Phone,
  BadgeCheck,
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  User,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { baseUrl } from "../../baseUrl";
import Loader from "../../Components/Loader/Loader";

const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState([]);
  const [loading, setLoading] = useState(false);

  // for whatsapp
  const message = `Hi, Advent Skills I would like to know what it takes to hire ${worker.name}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "+2348140062161";

  useEffect(() => {
    const fetchWorker = async () => {
    setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/workers/${id}`);
        setWorker(response.data);
      } catch (error) {
        console.error("Failed to fetch worker:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorker();
  }, [id]); // added `id` as a dependency in case it changes

  if (loading) {
    return <Loader/>
  }

  if (!worker) {
    return (
      <div className="text-center mt-20 text-gray-600">Worker not found.</div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        {/* Back Button */}
        <Link
          to="/workers"
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
            <h1 className="text-3xl font-bold text-gray-800">{worker.name}</h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 text-sm">
              <Briefcase className="w-4 h-4" />
              <span>{worker.role}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{worker.stateofresidence}, NG</span>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="mt-10 border-t pt-6 space-y-4 text-gray-700 text-base">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>{worker.phonenumber || "null"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mt-6">
            {/* Salary */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <DollarSign className="text-green-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Salary Expectation</p>
                <p className="font-semibold text-base">₦70,000</p>
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <User className="text-blue-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-semibold text-base">{worker.gender}</p>
              </div>
            </div>

            {/* Age */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <Calendar className="text-yellow-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-semibold text-base">
                  {worker.dob && !isNaN(new Date(worker.dob))
                    ? format(new Date(worker.dob), "dd MMMM yyyy")
                    : "Date not available"}
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <Clock className="text-purple-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Schedule</p>
                <p className="font-semibold text-base">{worker.schedule}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <Briefcase className="text-pink-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold text-base">
                  {worker.experience || "null"}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
              <ShieldCheck className="text-indigo-600 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-semibold text-base">
                  {worker.availability || "Immediate"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link
            to={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            // className="inline-flex items-center px-4 py-2 text-white rounded-xl transition"
          >
            <button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl transition">
              Book Worker Via WhatsApp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;
