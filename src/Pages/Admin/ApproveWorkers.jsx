import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { UserRound, MapPin, Briefcase, Phone, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const ApproveWorkers = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [worker, setWorker] = useState([])

  useEffect(() => {
    const fetchWorker = async () => {
        const response = await axios.get(`${baseUrl}/workers/${id}`)
        setWorker(response.data)
    }

    fetchWorker()
  }, [])

  if (!worker) {
    return (
      <div className="text-center mt-20 text-gray-600">Worker not found.</div>
    );
  }

  const approveWorker = async () => {

    try {
      await axios.put(`${baseUrl}/workers/${id}`)
      alert(`${worker.name} has been successfully approved`)
      navigate("/admin")
    } catch (err) {
      alert("An error occured please try again")
      console.log(err)
    }

    console.log("worker approved")
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
            <h1 className="text-3xl font-bold text-gray-800">{worker.name}</h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 text-sm">
              <Briefcase className="w-4 h-4" />
              <span>{worker.role}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 text-sm">
              Experience:
              <span>{worker.experience}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{worker.address}</span>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="mt-10 border-t pt-6 space-y-4 text-gray-700 text-base">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>{worker.phonenumber || "null"}</span>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Date of Birth:</span>{" "}
              {worker.dob || "2 years"}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {worker.gender || "2 years"}
            </p>
            <p>
              <span className="font-semibold">State of origin:</span>{" "}
              {worker.stateoforigin || "2 years"}
            </p>
            <p>
              <span className="font-semibold">LGA:</span>{" "}
              {worker.lga || "2 years"}
            </p>
            <p>
              <span className="font-semibold">Religion:</span>{" "}
              {worker.religion || "2 years"}
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span>{" "}
              {worker.maritalstatus || "2 years"}
            </p>
            <p>
              <span className="font-semibold">Number of children:</span>{" "}
              {worker.noofchildren || "none"}
            </p>
            <p>
              <span className="font-semibold">Next of Kin:</span>{" "}
              {worker.nextofkin || "none"}
            </p>
            <p>
              <span className="font-semibold">Next of Kin Phone Number:</span>{" "}
              {worker.nextofkinphonenumber || "none"}
            </p>
            <p>
              <span className="font-semibold">Live In:</span>{" "}
              {worker.livein || "none"}
            </p>
            <p>
              <span className="font-semibold">Work Schedule:</span>{" "}
              {worker.schedule || "none"}
            </p>
            <p>
              <span className="font-semibold">Highest Education:</span>{" "}
              {worker.education || "none"}
            </p>
            <p>
              <span className="font-semibold">Name of School:</span>{" "}
              {worker.nameofschool || "none"}
            </p>
            <p>
              <span className="font-semibold">Year Completed:</span>{" "}
              {worker.yearcompleted || "none"}
            </p>
            <p>
              <span className="font-semibold">Previous Employer:</span>{" "}
              {worker.previousemployer || "none"}
            </p>
            <p>
              <span className="font-semibold">Previous Employer Address:</span>{" "}
              {worker.previousemployeraddress || "none"}
            </p>
            <p>
              <span className="font-semibold">Previous Employer Phone Number:</span>{" "}
              {worker.previousemployerphonenumber || "none"}
            </p>
            <p>
              <span className="font-semibold">Can you Relocate ?:</span>{" "}
              {worker.relocate || "none"}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {worker.availability || "Immediate"}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
            <button onClick={() => approveWorker()}  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl transition">
              Approve Worker Request
            </button>
        </div>
      </div>
    </div>
  );
};

export default ApproveWorkers;
