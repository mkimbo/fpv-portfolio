import React from "react";

function Footer() {
  return (
    <div className="w-full flex items-center py-4 text-sm">
      <div className="flex flex-col lg:max-w-5xl mx-auto w-full px-5 ">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} by Fpv Drones
        </p>
      </div>
    </div>
  );
}

export default Footer;
