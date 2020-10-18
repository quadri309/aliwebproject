import React from "react";
import web from "./images/about.jpg";
import { NavLink } from "react-router-dom"
import Comman from "./Comman";

const About=() => {
    return (
        <>
       <Comman name="Welcome to About Page" imgsrc={ web } visit="/service" btname="Contact now"/>

        </>
    );
};

export default About; 