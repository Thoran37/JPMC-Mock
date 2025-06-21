import React from "react";
import {
  Menu,
  X,
  Home,
  Heart,
  LayoutDashboardIcon,
  HelpingHand,
  PenIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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

      <nav className="mt-4 flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? "bg-blue-700" : "hover:bg-blue-600"
            }`
          }
        >
          <Home size={24} />
          {isOpen && <span className="text-sm">Home</span>}
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? "bg-blue-700" : "hover:bg-blue-600"
            }`
          }
        >
          <LayoutDashboardIcon size={24} />
          {isOpen && <span className="text-sm">Dashboard</span>}
        </NavLink>
        <NavLink
          to="/donate"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? "bg-blue-700" : "hover:bg-blue-600"
            }`
          }
        >
          <HelpingHand size={24} />
          {isOpen && <span className="text-sm">Donate</span>}
        </NavLink>

        <NavLink
          to="/impact-stories"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? "bg-blue-700" : "hover:bg-blue-600"
            }`
          }
        >
          <Heart size={24} />
          {isOpen && <span className="text-sm">Impact</span>}
        </NavLink>

        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? "bg-blue-700" : "hover:bg-blue-600"
            }`
          }
        >
          <PenIcon size={24} />
          {isOpen && <span className="text-sm">Write to us</span>}
        </NavLink>
        {/* Add more NavLinks below as needed */}
      </nav>
    </div>
  );
}
