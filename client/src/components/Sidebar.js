import React from "react";
import { Menu, X, Home, Heart, Users } from "lucide-react";

const menuItems = [
  { icon: <Home size={24} />, label: "Home" },
  { icon: <Heart size={24} />, label: "Donate" },
  { icon: <Users size={24} />, label: "Team" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`bg-blue-800 text-white h-full transition-all duration-300 ease-in-out ${
        isOpen ? "w-60" : "w-16"
      } overflow-hidden shadow-lg`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">{isOpen ? "Jaldhaara" : "💧"}</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-4 py-3 hover:bg-blue-700 cursor-pointer"
          >
            {item.icon}
            {isOpen && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}
