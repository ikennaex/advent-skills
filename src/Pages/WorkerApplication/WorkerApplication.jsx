import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";

const WorkerApplication = () => {
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every((val) => val !== "");
    if (!isFormValid) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${baseUrl}/workers`, formData);
      alert(
        "You have successfully submitted a request. We will get back to you shortly."
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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-8">
      <p className="font-bold text-red-500">
        Note: All fields are required. Please fill them completely.
      </p>

      <Section title="1. Personal Information">
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <TextField
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          type="date"
          placeholder="Select your date of birth"
        />
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Male", "Female", "Other"]}
          placeholder="Select your gender"
        />
        <TextField
          label="State of Origin"
          name="stateoforigin"
          value={formData.stateoforigin}
          onChange={handleChange}
          placeholder="e.g. Lagos"
        />
        <TextField
          label="LGA"
          name="lga"
          value={formData.lga}
          onChange={handleChange}
          placeholder="Enter your LGA"
        />
        <TextField
          label="Religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          placeholder="e.g. Christianity, Islam"
        />
        <SelectField
          label="Marital Status"
          name="maritalstatus"
          value={formData.maritalstatus}
          onChange={handleChange}
          options={["Single", "Married", "Divorced", "Widowed"]}
          placeholder="Select marital status"
        />
        <TextField
          label="Number of Children"
          name="noofchildren"
          value={formData.noofchildren}
          onChange={handleChange}
          type="number"
          placeholder="e.g. 2"
        />
        <TextareaField
          label="Residential Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your full address"
        />
        <TextField
          label="State of Residence"
          name="stateofresidence"
          value={formData.stateofresidence}
          onChange={handleChange}
          placeholder="e.g. Abuja"
        />
        <TextField
          label="Phone Number (WhatsApp)"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          type="tel"
          placeholder="e.g. 08012345678"
        />
        <TextField
          label="Next of Kin Name"
          name="nextofkin"
          value={formData.nextofkin}
          onChange={handleChange}
          placeholder="Enter full name of next of kin"
        />
        <TextField
          label="Next of Kin Phone Number"
          name="nextofkinphonenumber"
          value={formData.nextofkinphonenumber}
          onChange={handleChange}
          type="tel"
          placeholder="e.g. 08098765432"
        />
      </Section>

      <Section title="2. Position Applying For">
        <SelectField
          label="Preferred Job Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            "Driver",
            "Nanny",
            "Househelp/keeper",
            "Cook/Chef",
            "General Cleaner",
            "Laundry Person",
            "Gardener",
            "Pool Cleaner/Attendant",
            "Personal Assistant/Errand Runners",
          ]}
          placeholder="Select your job preference"
        />
        <TextField
          label="Experience Level"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="e.g. 2 years"
        />
        <SelectField
          label="Willing to Live In?"
          name="livein"
          value={formData.livein}
          onChange={handleChange}
          options={["Yes", "No"]}
          placeholder="Select an option"
        />
        <SelectField
          label="Willing to Relocate?"
          name="relocate"
          value={formData.relocate}
          onChange={handleChange}
          options={["Yes", "No"]}
          placeholder="Select an option"
        />
        <SelectField
          label="Preferred Work Schedule"
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          options={["Live-in", "Live-out", "Part-time", "Full-time"]}
          placeholder="Select schedule"
        />
      </Section>

      <Section title="3. Educational Background">
        <SelectField
          label="Highest Level of Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          options={["None", "Primary", "Secondary", "Tertiary", "Vocational"]}
          placeholder="Select education level"
        />
        <TextField
          label="Name of School Attended"
          name="nameofschool"
          value={formData.nameofschool}
          onChange={handleChange}
          placeholder="Enter school name"
        />
        <TextField
          label="Year Completed"
          name="yearcompleted"
          value={formData.yearcompleted}
          onChange={handleChange}
          type="number"
          placeholder="e.g. 2018"
        />
      </Section>

      <Section title="4. Employment History">
        <TextField
          label="Previous Employer's Name"
          name="previousemployer"
          value={formData.previousemployer}
          onChange={handleChange}
          placeholder="Enter previous employer name"
        />
        <TextareaField
          label="Employer's Address"
          name="previousemployeraddress"
          value={formData.previousemployeraddress}
          onChange={handleChange}
          placeholder="Enter address of previous employer"
        />
        <TextField
          label="Employer's Phone Number"
          name="previousemployerphonenumber"
          value={formData.previousemployerphonenumber}
          onChange={handleChange}
          type="tel"
          placeholder="e.g. 08099887766"
        />
      </Section>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-customGreen text-white py-2 px-4 rounded hover:bg-customGreen/90 font-semibold transition-all duration-200 ${
          loading ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        {loading ? (
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
        ) : (
          "Submit"
        )}
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

const TextField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="">{placeholder || "Select an option"}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}:
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      rows={3}
    />
  </div>
);

export default WorkerApplication;
