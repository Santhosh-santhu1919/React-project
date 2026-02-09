import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    zipcode: "",
    city: "",
    state: "",
    country: "India",
    billingAddress: "",
    natureOfBusiness: "",
    source: "",
  });

  const natureOptions = [
    "Advertising Agency",
    "App",
    "Banking & Insurance",
    "Beauty",
    "Cafe",
    "Club",
    "Consultancy Firms & Agencies",
    "Ecommerce",
    "Educational Institutions",
    "General Shops",
    "Healthcare",
    "Hotels",
    "Import & Export",
    "Information Technology Services",
    "Manufacturer",
    "Media & Event Management",
    "NGO",
    "Photography & Video",
    "Portal",
    "RealEstate & Interior",
    "Restaurants",
    "Retailer",
    "Schools",
    "Spirituals",
    "Tour and Travel Services",
  ];

  const sourceOptions = [
    "Google Ads",
    "Facebook Ads",
    "Instagram Ads",
    "LinkedIn",
    "Website",
    "SEO",
    "Partner",
    "Direct Walkins",
    "Calls",
    "Reference",
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Full Name: ${formData.fullName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Business Name: ${formData.businessName}%0A
Nature of Business: ${formData.natureOfBusiness}%0A
Zipcode: ${formData.zipcode}%0A
City: ${formData.city}%0A
State: ${formData.state}%0A
Country: ${formData.country}%0A
Billing Address: ${formData.billingAddress}%0A
How did you hear about us: ${formData.source}%0A
`;

    window.open(
      `mailto:contact@buildbrosinnovations.in?subject=New Contact Form Submission - BuildBros Innovations&body=${body}`,
      "_blank"
    );

    alert("📧 Opening your email app to send details to BuildBros Innovations...");
  };

  const Dropdown = ({ label, name, options, required }) => (
    <div>
      <label className="block text-sm font-semibold text-blue-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full border border-blue-200 rounded-xl p-3"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-6 bg-sky-50">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-3">
          Contact BuildBros Innovations
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Share your project details and our team will connect with you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="fullName" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border rounded-xl" />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 border rounded-xl" />
          <input name="phone" placeholder="Phone (+91)" onChange={handleChange} required className="w-full p-3 border rounded-xl" />

          <Dropdown label="Nature of Business" name="natureOfBusiness" options={natureOptions} required />
          <Dropdown label="How did you hear about us?" name="source" options={sourceOptions} />

          <textarea name="billingAddress" placeholder="Project description" rows="3" onChange={handleChange} className="w-full p-3 border rounded-xl" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}