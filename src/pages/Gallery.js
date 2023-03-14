import Header from "../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../components/Project";

const Gallery = () =>{
    return <div>
        <Header/>
        <h1>My Projects</h1>
        <Project/>;
</div>
}

export default Gallery;