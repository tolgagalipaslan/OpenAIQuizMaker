import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";
const BodyQuiz = () => {
  return (
    <div className="flex flex-col text-center gap-5 p-5 h-[90vh] w-full ">
      {/* image */}
      <div className="p-5  mx-auto">
        <img
          src="/assets/160821-075919_quix-night.png"
          alt=""
          className=" rounded-3xl "
        />
      </div>

      <div className="p-5  text-lg  px-10 bg-[#292829] rounded-3xl flex  items-center gap-3">
        <FaQuestionCircle className="text-9xl text-[#33c52b] " />
        Create your quiz and try it yourself now.Choose the appropriate topic,
        number of questions and difficulty, take the test with the features you
        want.
      </div>
      <div className="p-5  text-lg  px-10 bg-[#928f92] rounded-3xl flex items-center gap-3">
        <MdOutlineQuestionAnswer className="text-9xl  text-[#920848]" />
        You can improve yourself for free. Don't miss this opportunity , create
        a quiz now and improve yourself .
      </div>

      <div className="mt-auto">
        <Link
          to="/generate/test"
          className="bg-[#ff9d3b] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded animate-bounce  w-full h-14 "
        >
          Create Test!
        </Link>
      </div>
    </div>
  );
};

export default BodyQuiz;
