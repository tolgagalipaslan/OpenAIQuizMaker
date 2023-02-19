import React from "react";
import { SiTestinglibrary } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className=" h-[10vh] w-full bg-black    flex gap-2  px-10 py-5  align-middle text-white  ">
      <Link to="/" className=" flex  justify-center align-middle items-center">
        <SiTestinglibrary className="text-4xl font-semibold m-2 " /> QUIZ{" "}
        <span className="text-[#ff9d3b] text-3xl">.IT</span>
      </Link>
      {location.pathname === "/generate/test" ? null : (
        <Link
          to="/generate/test"
          className="bg-[#ff9d3b] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-auto flex justify-center items-center"
        >
          Create Test!
        </Link>
      )}
    </div>
  );
};

export default Navbar;
