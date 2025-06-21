import React, { useState } from "react";

const FeedbackPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedbackType: "General",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    alert("Thank you for your feedback!");
    // TODO: Send to backend
    setForm({ name: "", email: "", feedbackType: "General", message: "" });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        We Value Your Feedback
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Feedback Type</label>
          <select
            name="feedbackType"
            value={form.feedbackType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>General</option>
            <option>Bug Report</option>
            <option>Suggestion</option>
            <option>Testimonial</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage;
