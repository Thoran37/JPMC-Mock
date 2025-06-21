import React, { useState } from "react";

const UserRegistration = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aadhaarNumber: "",
    donationAmount: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Individual Donation Data:", form);
    // send to backend
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-green-800 text-center">
        Individual Donation
      </h2>
      {[
        { label: "Full Name", name: "fullName" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone Number", name: "phone" },
        { label: "Address", name: "address" },
        { label: "Aadhaar Number", name: "aadhaarNumber" },
        {
          label: "Donation Amount (₹)",
          name: "donationAmount",
          type: "number",
        },
        { label: "Purpose", name: "purpose" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block mb-1 font-semibold">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded-lg"
      >
        Submit Donation
      </button>
    </form>
  );
};

export default UserRegistration;
