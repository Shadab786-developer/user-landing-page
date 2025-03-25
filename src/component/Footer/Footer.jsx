import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  // State for tracking active navigation tab
  const [activeTab, setActiveTab] = useState("home");

  // Update active tab when route changes
  useEffect(() => {
    // Update active tab based on current route
    const path = location.pathname;
    if (path === "") setActiveTab("home");
    else if (path === "/Profile") setActiveTab("Profile");
  }, [location]);

  return (
    // Fixed header with navigation items
    <div className="bg-white border-b border-b-gray-100 left-0 px-6 fixed top-0 w-screen z-[100] md:h-11">
      <div className="flex items-center my-0 mx-auto min-h-full max-w-[1128px]">
        {/* Navigation links */}
        <nav className=" md:block md:top-0 md:bg-transparent lg:ml-[45%] lg:block lg:top-0 lg:bg-transparent sm:fixed sm:left-0 sm:bottom-0 sm:bg-white sm:w-full">
          <ul className="flex flex-nowrap list-none items-center justify-center">
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={""}
                className={`items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative $ `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={"#000000"}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "/Home"
                      ? "text-black after:border-b-[rgba(0,0,0,0.9)] border-b-[var(--white , #fff)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Profile"}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative  "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="24"
                  className="mt-1"
                  height={24}
                  fill={"#000000"}
                  focusable="false"
                >
                  <path d="M256 128c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0 64c-70.7 0-128 57.3-128 128v96h256v-96c0-70.7-57.3-128-128-128zm0 256c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-80c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
                </svg>

                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "network"
                      ? "text-black border-b-[rgba(0,0,0,0.9)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Profile
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
