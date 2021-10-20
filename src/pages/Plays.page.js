import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";

const Plays = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="w-full lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold">Plays in Jaipur</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster 
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg"
                title="Tvk Cultural presents Ponniyin Selvan"
                subtitle="Tamil ₹ 300"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster 
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg"
                title="Tvk Cultural presents Ponniyin Selvan"
                subtitle="Tamil ₹ 300"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster 
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg"
                title="Tvk Cultural presents Ponniyin Selvan"
                subtitle="Tamil ₹ 300"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster 
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/11/Obama-Modern-Creative-Poster-Idea.jpg"
                title="Tvk Cultural presents Ponniyin Selvan"
                subtitle="Tamil ₹ 300"
                />
              </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
          <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
          <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
          <PlaysFilter title="Categories" tags={["Theatre"]}/>
          <button className="text-red-500 bg-white rounded border-2 border-red-400 px-5 py-1">Browse by Venues</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Plays;