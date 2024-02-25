import React from "react";
import { NavLink } from "react-router-dom";

import BrandLogo from "/images/skoda-logo.png";

export default function Header() {
  return (
    <div className="flex items-center px-5 gap-5 py-3 border-b-2">
      <NavLink to="/">
        <img src={BrandLogo} alt="skoda-brand-logo" className="w-[170px]" />
      </NavLink>
      <ul className="flex gap-10 mx-5">
        <li className="font-nunito font-semibold text-[16px] ">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[rgb(25,100,56)]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[rgb(25,100,56)] lg:p-0`
            }
          >
            Products
          </NavLink>
        </li>
        <li className="font-nunito font-semibold text-[16px] ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[rgb(25,100,56)]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[rgb(25,100,56)] lg:p-0`
            }
          >
            About
          </NavLink>
        </li>
        <li className="font-nunito font-semibold text-[16px]">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-[rgb(25,100,56)]" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[rgb(25,100,56)] lg:p-0`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
