// Higher Order Components - It transforms components into another components.
// Adding additional functionalities to the existing components.
import React from "react";
import { Route } from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
        {...rest}

        component = {(props) => (
            <MovieLayout>
            <Component {...props} />
            </MovieLayout>
            )
        }
     />
    </>
  );
};

export default MovieHOC;