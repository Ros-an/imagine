import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../constant";
import useAppContext from "../hooks/useAppContext";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAppContext();
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
              onClick={() => handleNavigate(PATHS.buyCredit)}
            >
              <img
                src={assets.credit_star}
                alt="credit_start"
                className="w-5"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left: 50
              </span>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Roshan</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile-icon"
                className="w-10 drop-shadow-sm"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
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
