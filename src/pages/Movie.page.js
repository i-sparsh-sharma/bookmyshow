import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
// import {BiCameraMovie} from "react-icons/bi";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_TqQA7nJF0vNGbd",
    amount: 500,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image:
      "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done");
    },
    theme: { color: "#c4242d" },
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as
            Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization.
            The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">
            Applicable Offers
          </h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
            <div className="lg:w-15 lg:h-15 md:w-10 md:h-10">
              {/* <BiCameraMovie className="w-full h-full"/> */}
              <img
                src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052"
                alt="offer"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600 text-sm">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col rounded-full justify-center">
                <img
                  style={{ borderRadius: "60%" }}
                  height="100px"
                  width="100px"
                  src="https://indiaatoz.in/wp-content/uploads/2021/06/f16371a592b86eefbd03ae49a616201f10-simu-liu-jung.rsquare.w330.jpg"
                />
                <div className="font-bold text-center">Simu Liu</div>
              </div>
              <div className="flex flex-col rounded-full justify-center">
                <img
                  style={{ borderRadius: "60%" }}
                  height="100px"
                  width="100px"
                  src="https://pyxis.nymag.com/v1/imgs/07b/716/0b5897564819bd2115ea0c3dd84f447c77-16-awkwafina.rsquare.w330.jpg"
                />
                <div className="font-bold text-center">Awkwafina</div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={launchRazorPay}
          class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded"
        >
          Book tickets
        </button>
      </div>
    </>
  );
};
export default Movie;
