import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const Navbar = () => {
  const link = [
    {
      path: "/",
      label: "Home",
      icon: <IoHomeOutline />,
    },
    {
      path: "/timeline",
      label: "Timeline",
      icon: <RiTimeLine />,
    },
    {
      path: "/stats",
      label: "Stats",
      icon: <TfiStatsUp />,
    },
  ];

  return (
    <div>
      <div className="navbar container bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* dropdown menu */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link.map((route, ind) => (
                <NavLink
                  key={ind}
                  to={route.path}
                  className={({ isActive }) =>
                    `flex items-center justify-center py-1  rounded-sm gap-1 font-semibold mt-3 ${
                      isActive
                        ? "text-gray-200 bg-green-700"
                        : "border border-green-500"
                    }`
                  }
                >
                  {route.icon}
                  {route.label}
                </NavLink>
              ))}
            </ul>
          </div>
          <h2 className="text-xl">
            {" "}
            <span className="font-extrabold">Keen</span>
            <span className="font-bold">Keeper</span>
          </h2>
        </div>

        {/* end button */}
        <div className="navbar-end hidden md:flex">
          {link.map((route, ind) => (
            <NavLink
              key={ind}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center justify-center py-1 px-2 rounded-sm gap-1 font-semibold mr-3 ${
                  isActive
                    ? "text-gray-200 bg-green-700"
                    : "border border-green-500"
                }`
              }
            >
              {route.icon}
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
