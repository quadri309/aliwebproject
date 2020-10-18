import React from "react";
import web from "./images/home.jpg";
import { NavLink } from "react-router-dom"
import Comman from "./Comman";

const Home =() => {
    return (
        <>
       <Comman name="Grow your bussiness with" imgsrc={ web } visit="/about" btname="Get start"/>

        </>
    );
};

export default Home; 