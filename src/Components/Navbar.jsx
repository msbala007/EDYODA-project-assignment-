import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 flex justify-evenly items-center bg-slate-100 h-12 ">
        <section className="flex justify-center items-center space-x-14 ">
          <div className="cursor-pointer">
            <img src={Logo} className="w-52 h-12" />
          </div>
          <div className="cursor-pointer flex justify-center items-center h-full sm:hidden md:hidden  ">
            <div>
              <h3>Courses</h3>{" "}
            </div>
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 mt-2 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center h-full sm:hidden md:hidden ">
            <div>
              <h3>Programs</h3>{" "}
            </div>
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 mt-2 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className=" flex justify-center items-center space-x-10 sm:hidden md:hidden ">
          <div className="cursor-pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <button>Log in</button>
          </div>
          <div>
            {" "}
            <button className="bg-blue-500 px-6 py-1 rounded-full text-white">
              JOIN NOW
            </button>
          </div>
          
        </section>
        <section className="xl:hidden lg:hidden"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div></section>
      </header>
    </>
  );
};

export default Navbar;
