import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="border-b w-full">
        <div className="navbar justify-between md:justify-center md:gap-60 lg:gap-96">
          <div className="left flex gap-10">
            <img
              src="https://assets.republic.com/assets/logo/full/black/logo-e66f75343959f4765e31fe42cdfb4fd3ba32de9773e941b31d12e992a6c3e842.svg"
              alt="logo"
            />
            <div className="hidden md:block hover:border-b-blue-800">
              <a href="#">Investors</a>
            </div>
            <div className="hidden md:block">
              <a href="#">Businesses</a>
            </div>
            <form className="hidden md:flex md:items-center md:gap-2 input bg-gray-100 rounded-2xl h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" placeholder="Search" className="w-[120px]" />
            </form>
          </div>
          <div className="right flex gap-4">
            <div>Log In</div>
            <div>Sign Up</div>
            <details className="dropdown md:hidden">
              <summary className="m-1 btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Investors</a>
                </li>
                <li>
                  <a>Businesses</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
