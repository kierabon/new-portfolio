import React from "react";
import "./Projects.css";
import calculator from "./calc.png";
import weatherApp from "./weatherApp.png";
import wAppVanilla from "./wappVanilla.png";
import dictionary from "./dictionary.png";


export default function Projects(){
    return(
        <div className="Projects">
            <div className="container">
                <div className="row">
                    <h3>Projects</h3>
                </div>
            <ul className="prject-title">
                <div className="row">
                    <div className="col-2">
                <li className="calculator">
                    <span>Calculator </span>
                        <a href="https://goofy-goldberg-e66c09.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={calculator} className="img-fluid" alt="calculator" />
                    </a>   
                </li> 
                </div>
            <div className="col-3">
                <li className="weather-app">
                     <span>Weather App React</span>
                        <a href="https://vigorous-euclid-17656d.netlify.app" target="_blank" rel="noreferrer">
                    <img src={weatherApp} className="img-fluid" alt="calculator" />
                    </a> 
                    
                </li> </div>
                <div className="col-3">
                 <li className="weather-app-vanilla">
                     <span>Weather App Vanilla</span>
                     <a href="https://ecstatic-mirzakhani-8a5e03.netlify.app" target="_blank" rel="noreferrer">
                    <img src={wAppVanilla} className="img-fluid" alt="calculator" />
                    </a> 
                </li> </div>
                <div className="col-2">
                <li className="dictionary">Dictionary
                     <span> <a href="https://sharp-noether-12af75.netlify.app" target="_blank" rel="noreferrer">
                    <img src={dictionary} className="img-fluid" alt="calculator" />
                    </a> </span>
                </li> </div>
                
                </div>
            </ul>
        </div>
        </div>
    )
}