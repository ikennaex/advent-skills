import React from "react";

const About = () => {
  return (
<div className="container mx-auto px-7 py-12 max-w-3xl">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Us</h2>

  <p className="leading-relaxed mb-6">
    <strong>Advent Skills Domestic Recruiters</strong> is a Nigerian-based domestic recruitment agency committed
    to providing reliable, professional, and verified household staff for families and individuals.
    With years of industry experience and a passion for excellent service, we specialize in matching
    clients with domestic workers who are skilled, trustworthy, and ready to make a difference in your home.
  </p>

  <p className="leading-relaxed mb-6">
    We understand the importance of security and peace of mind, which is why our vetting process includes
    background checks, reference verification, and in-person interviews.
  </p>

  <div className="space-y-4">
    <div>
      <h3 className="text-xl font-medium text-gray-800">Our Mission</h3>
      <p className="leading-relaxed">
        To redefine domestic staffing in Nigeria by setting a standard for quality, safety, and professionalism.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-medium text-gray-800">Our Vision</h3>
      <p className="text-gray-600 leading-relaxed">
        To become the most trusted name in domestic recruitment, one household at a time.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;
