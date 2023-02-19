import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Card from "../components/Card";
import Loader from "../components/Loader";
const Test = () => {
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [testQuestions, setTestQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  //refresh page
  const f5 = () => {
    window.location.reload(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      difficulty.trimStart() === "" ||
      topic.trimStart() === "" ||
      numQuestions.trimStart() === ""
    ) {
      formError("Fill out the form completely");
    } else if (numQuestions.trimStart() > 25) {
      formError("You can create up to 25 questions.");
    } else {
      try {
        setLoading(true);
        const res = await axios.post("http://localhost:3080/", {
          topic,
          questionCount: numQuestions,
          difficulty,
        });
        const data = await res.data;
        setTestQuestions(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  const formError = (message) => toast.error(message);
  return (
    <div className="chat-wrapper bg-[#131313] min-h-[90vh] relative w-full text-white gap-3">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" chat-wrapper w-[85%] mx-auto bg-[#f69c42] min-h-[90vh] rounded-lg">
        {loading ? (
          <div className="flex justify-center items-center h-screen my-auto">
            <Loader />
          </div>
        ) : testQuestions?.length === 0 ? (
          <div className="border-b border-black ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center mx-auto text-center align-middle gap-3 p-5  text-black  sm:w-fit"
            >
              <div className="flex  gap-3  sm:flex-col items-start  mt-auto">
                <label htmlFor="difficulty">Difficulty Level:</label>
                <select
                  className="text-black font-semibold"
                  id="difficulty"
                  name="difficulty"
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                >
                  <option value="">Choose</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="flex  gap-3 sm:flex-col items-start mt-auto">
                <label htmlFor="topic" className="">
                  Subject:
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                />
              </div>
              <div className="flex  gap-3   sm:flex-col items-start mt-auto">
                <label htmlFor="numQuestions" className="w-fit">
                  Number of Questions:
                </label>
                <input
                  type="number"
                  id="numQuestions"
                  name="numQuestions"
                  className=" sm:w-full"
                  value={numQuestions}
                  onChange={(event) => setNumQuestions(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-[#d12c3f] flex flex-col gap-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto items-center justify-center  w-full  sm:w-fit "
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center  pt-5">
            <button
              onClick={f5}
              className="bg-[#181717] hover:bg-blue-700 text-white font-bold py-2 p-6 rounded  flex justify-center animate-bounce items-center"
            >
              {" "}
              Create New Test
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2   gap-3  p-10">
              {testQuestions?.map((question, i) => (
                <div key={i}>
                  <Card question={question} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
