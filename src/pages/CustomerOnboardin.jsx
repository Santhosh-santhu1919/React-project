import React, { useState } from "react";

export default function CustomerOnboarding() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    gstNo: "",
    panNo: "",
    city: "",
    state: "",
    billingAddress: "",
    natureOfBusiness: "",
    source: "",
    idType: "",
  });

  const natureOptions = [
    "Advertising Agency",
    "App",
    "Banking & Insurance",
    "Beauty",
    "Cafe",
    "Consultancy Firms & Agencies",
    "Ecommerce",
    "Educational Institutions",
    "Healthcare",
    "Hotels",
    "Information Technology Services",
    "Manufacturer",
    "Media & Event Management",
    "RealEstate & Interior",
    "Restaurants",
    "Retailer",
    "Tour and Travel Services",
  ];

  const sourceOptions = [
    "Google Ads",
    "Facebook Ads",
    "LinkedIn",
    "Instagram",
    "Website",
    "SEO",
    "Partner",
    "Reference",
  ];

  const idProofOptions = [
    "Aadhaar Card",
    "PAN Card",
    "Voter ID",
    "Passport",
    "Driving License",
    "Company ID",
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Business Name: ${formData.businessName}
GST No: ${formData.gstNo}
PAN No: ${formData.panNo}
City: ${formData.city}
State: ${formData.state}
Billing Address: ${formData.billingAddress}
Nature of Business: ${formData.natureOfBusiness}
Source: ${formData.source}
`;

    window.open(
      `mailto:contact@buildbrosinnovations.in?subject=Customer Onboarding&body=${encodeURIComponent(
        body
      )}`
    );
  };

  const Input = ({ label, name, type = "text" }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );

  const Dropdown = ({ label, name, options }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-24 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Customer Onboarding
          </h1>
          <p className="text-gray-500 mt-2">
            Please fill in your details to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* BASIC DETAILS */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Personal & Business Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full Name" name="fullName" />
              <Input label="Email Address" name="email" type="email" />
              <Input label="Phone Number" name="phone" />
              <Input label="Business Name" name="businessName" />
              <Input label="GST Number" name="gstNo" />
              <Input label="PAN Number" name="panNo" />
              <Input label="City" name="city" />
              <Input label="State" name="state" />
            </div>
          </div>

          {/* DROPDOWNS */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Business Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Dropdown
                label="Nature of Business"
                name="natureOfBusiness"
                options={natureOptions}
              />
              <Dropdown
                label="Source"
                name="source"
                options={sourceOptions}
              />
              <Dropdown
                label="ID Proof Type"
                name="idType"
                options={idProofOptions}
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Billing Address
            </label>
            <textarea
              name="billingAddress"
              rows={4}
              value={formData.billingAddress}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg"
          >
            Submit Onboarding Form
          </button>
        </form>
      </div>
    </section>
  );
}
