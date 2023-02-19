import React from "react";

const Card = ({ question }) => {
  const handleControl = (e, answer) => {
    if (answer.split(" ")[1].includes(e.target.innerText[0])) {
      e.target.classList.add("bg-green-300");
    } else {
      e.target.classList.add("bg-red-300");
      setTimeout(() => {
        e.target.classList.remove("bg-red-300");
      }, 2000);
    }
  };
  return (
    <div className="border flex flex-col gap-2 h-full  rounded-lg overflow-hidden bg-white text-black">
      <div className="p-3">{question.question}</div>
      <div className="grid grid-cols-2  mt-auto">
        {question.options.map((option, i) => (
          <div
            key={i}
            onClick={(e) => handleControl(e, question.answer)}
            className="border p-3  hover:bg-[#ff9d3b]"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
