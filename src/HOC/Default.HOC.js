// Higher Order Components - It transforms components into another components.
// Adding additional functionalities to the existing components.
import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route
        {...rest}

        component = {(props) => (
            <DefaultLayout>
            <Component {...props} />
            </DefaultLayout>
            )
        }
     />
    </>
  );
};

export default DefaultHOC;