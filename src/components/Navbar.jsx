import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="dark:bg-primary">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center ">
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-0 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 dark:text-gray-300 rounded dark:bg-primary hover:underline dark:hover:text-gray-200"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to={"projects"}
                  className="block py-2 px-3 dark:text-gray-300 rounded dark:bg-primary hover:underline dark:hover:text-gray-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={"skills"}
                  className="block py-2 px-3 dark:text-gray-300 rounded dark:bg-primary hover:underline dark:hover:text-gray-200"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="block py-2 px-3 dark:text-gray-300 rounded dark:bg-primary hover:underline dark:hover:text-gray-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
