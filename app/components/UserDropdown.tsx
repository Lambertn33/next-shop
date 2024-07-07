"use client";

import React, { useState, FC, useRef, useEffect } from "react";
import { signOutHandler } from "../actions/auth";

interface IUser {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profilePictureUrl: string | null;
}

interface UserDropdownProps {
  user: IUser;
}

const UserDropdown: FC<UserDropdownProps> = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const dropdownRef = useRef(null);

  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownOpen(false);
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={user?.profilePictureUrl!}
          alt="user photo"
        />
      </button>

      {dropdownOpen && (
        <div
          id="dropdownAvatar"
          className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>
              {user?.firstName} {user?.lastName}
            </div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <form
              action={async () => {
                await signOutHandler();
              }}
            >
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
