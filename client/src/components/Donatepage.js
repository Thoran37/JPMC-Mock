import React from "react";
import { useNavigate } from "react-router-dom";

const DonatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-800">Choose Donor Type</h2>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/donate/organization")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow"
        >
          Donate as Organization
        </button>
        <button
          onClick={() => navigate("/donate/individual")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow"
        >
          Donate as Individual
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
