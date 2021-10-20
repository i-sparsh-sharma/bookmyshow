import React from "react";


const MovieInfo = () => {
  return (
    <>
      <div className="flex flex-col py-7 px-7 gap-3 lg:gap-8">
        <div className="text-white text-4xl font-semibold">
          Shang-Chi
        </div>
        <div className="flex flex-row block text-white bg-gray-800 rounded-lg py-3 px-6">
        Add your rating & review
          <button
            className="bg-gray-200 text-black w-full rounded-lg"
          >Rate Now
          </button>
        </div>
        <div className="flex felx-row text-white">
        2h 25m •Comedy, Romantic •UA •15 Oct, 2021
        </div>
        <div className="items-center gap-3 md:w-screen lg:w-full">
          <button
            className="bg-red-600 w-full py-3 px-20 text-white font-semibold rounded-lg"
          >
            Book Tickets
          </button>
        </div>
        </div>
    </>
  );
};

export default MovieInfo;