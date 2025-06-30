import React from "react";
import { useState } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";

const WorkerApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    stateoforigin: "",
    lga: "",
    religion: "",
    maritalstatus: "",
    noofchildren: "",
    address: "",
    phonenumber: "",
    nextofkin: "",
    nextofkinphonenumber: "",

    role: "",
    livein: "",
    relocate: "",
    schedule: "",

    education: "",
    nameofschool: "",
    yearcompleted: "",

    previousemployer: "",
    previousemployeraddress: "",
    previousemployerphonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/workers`, formData);
      alert(
        "You have successfully submitted a request, we will get back to you shortly"
      );
      setFormData({
        name: "",
        dob: "",
        gender: "",
        stateoforigin: "",
        lga: "",
        religion: "",
        maritalstatus: "",
        noofchildren: "",
        address: "",
        stateofresidence: "",
        phonenumber: "",
        nextofkin: "",
        nextofkinphonenumber: "",

        role: "",
        experience: "",
        livein: "",
        relocate: "",
        schedule: "",

        education: "",
        nameofschool: "",
        yearcompleted: "",

        previousemployer: "",
        previousemployeraddress: "",
        previousemployerphonenumber: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Section 1: Personal Info */}
      <Section title="1. Personal Information">
        <TextField
          label="Full Name"
          name="name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          type="date"
        />
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Male", "Female", "Other"]}
        />
        <TextField
          label="Nationality / State of Origin"
          name="stateoforigin"
          value={formData.stateoforigin}
          onChange={handleChange}
        />
        <TextField
          label="LGA"
          name="lga"
          value={formData.lga}
          onChange={handleChange}
        />
        <TextField
          label="Religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
        />
        <SelectField
          label="Marital Status"
          name="maritalstatus"
          value={formData.maritalstatus}
          onChange={handleChange}
          options={["Single", "Married", "Divorced", "Widowed"]}
        />
        <TextField
          label="Number of Children (if any)"
          name="noofchildren"
          value={formData.noofchildren}
          onChange={handleChange}
          type="number"
        />
        <TextareaField
          label="Residential Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          label="State of Residence"
          name="stateofresidence"
          value={formData.stateofresidence}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number (WhatsApp)"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          type="tel"
        />
        <TextField
          label="Next of Kin Name"
          name="nextofkin"
          value={formData.nextofkin}
          onChange={handleChange}
        />
        <TextField
          label="Next of Kin Phone Number"
          name="nextofkinphonenumber"
          value={formData.nextofkinphonenumber}
          onChange={handleChange}
        />
      </Section>

      {/* Section 2: Position Applying For */}
      <Section title="2. Position Applying For">
        <TextField
          label="Preferred Job Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <TextField
          label="Experience Level, eg: 2 Years"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <SelectField
          label="Are you willing to live in?"
          name="livein"
          value={formData.livein}
          onChange={handleChange}
          options={["Yes", "No"]}
        />
        <SelectField
          label="Are you willing to relocate?"
          name="relocate"
          value={formData.relocate}
          onChange={handleChange}
          options={["Yes", "No"]}
        />
        <SelectField
          label="Preferred Work Schedule"
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          options={["Live-in", "Live-out", "Part-time", "Full-time"]}
        />
      </Section>

      {/* Section 3: Education */}
      <Section title="3. Educational Background">
        <SelectField
          label="Highest Level of Education Completed"
          name="education"
          value={formData.education}
          onChange={handleChange}
          options={["None", "Primary", "Secondary", "Tertiary", "Vocational"]}
        />
        <TextField
          label="Name of School Attended"
          name="nameofschool"
          value={formData.nameofschool}
          onChange={handleChange}
        />
        <TextField
          label="Year Completed"
          name="yearcompleted"
          value={formData.yearcompleted}
          onChange={handleChange}
          type="number"
        />
      </Section>

      {/* Section 4: Employment History */}
      <Section title="4. Employment History">
        <TextField
          label="Name of Previous Employer"
          name="previousemployer"
          value={formData.previousemployer}
          onChange={handleChange}
        />
        <TextareaField
          label="Address"
          name="previousemployeraddress"
          value={formData.previousemployeraddress}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number (if available)"
          name="previousemployerphonenumber"
          value={formData.previousemployerphonenumber}
          onChange={handleChange}
          type="tel"
        />
      </Section>

      <button
        type="submit"
        className="w-full bg-customGreen text-white py-2 px-4 rounded hover:bg-customGreen/90"
      >
        Submit
      </button>
    </form>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section>
    <h1 className="text-xl font-bold mb-4">{title}</h1>
    {children}
  </section>
);

const TextField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="">Select an option</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      rows={3}
    />
  </div>
);
export default WorkerApplication;
