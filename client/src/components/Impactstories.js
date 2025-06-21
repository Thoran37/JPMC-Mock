import React, { useState, useEffect } from "react";

const dummyStories = [
  {
    id: 1,
    title: "Clean Water Reaches Remote Village",
    image: "/assets/cleanwater_villages.jpg",
    summary:
      "Thanks to our WHC in Andhra Pradesh, over 1,000 villagers now have daily access to clean water. Health outcomes have improved dramatically.",
    fullStory: "https://example.com/stories/village-water",
  },
  {
    id: 2,
    title: "School Kids Thrive with Safe Drinking Water",
    image: "/assets/cleanwater_schools.jpg",
    summary:
      "Students in Telangana now attend school without worrying about waterborne diseases. Their attendance and energy levels have improved.",
    fullStory: "https://example.com/stories/school-impact",
  },
  {
    id: 3,
    title: "Empowering Women Through Local WHCs",
    image: "/assets/women_empowerment_villages.jpg",
    summary:
      "Women-led WHCs in Karnataka have empowered local communities and created new job opportunities.",
    fullStory: "https://example.com/stories/women-whc",
  },
];

const ImpactStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setStories(dummyStories);
    }, 500);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Impact Stories
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-4">{story.summary}</p>
              {story.fullStory && (
                <a
                  href={story.fullStory}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Read Full Story →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
