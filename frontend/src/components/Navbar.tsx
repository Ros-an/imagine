import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../constant";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <nav className="flex items-center justify-between py-4">
      <Link to={PATHS.home}>
        <img
          src={assets.logo}
          alt="imagine_logo"
          className="w-28 sm:w-32 lg:w-40"
        />
      </Link>
      {/* user === null ? loggedout div : loggedin div */}
      <div>
        {user ? (
          <div></div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 ">
            <p
              className="cursor-pointer"
              onClick={() => handleNavigate(PATHS.buyCredit)}
            >
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
