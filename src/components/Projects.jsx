import React from "react";
import "./Projects.css";

export default function Projects(){
    return(
        <div className="Projects">
            <div className="container">
                <h3>Projects</h3>
                <br />
            <ul className="prject-title">
                <li className="calculator">Calculator
                   <span> link and screenshot </span>
                </li>
                <li className="weather-app">weather-app
                    <span> link and screenshot </span>
                </li>
                <li className="dictionary">Dictionary
                     <span> link and screenshot </span>
                </li>
                <li className="mario-vanilla">Mario
                   <span> link and screenshot </span>
                </li>
            </ul>
        </div>
        </div>
    )
}