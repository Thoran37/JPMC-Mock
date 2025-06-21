import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed h-full z-10">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      </div>

      <main
        className={`transition-all duration-300 ease-in-out flex-1 overflow-y-auto bg-blue-50 p-6 ${
          isSidebarOpen ? "ml-60" : "ml-16"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
