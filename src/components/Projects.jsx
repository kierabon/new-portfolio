import React from "react";
import "./Projects.css";
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import calculator from "./calc.png";
import weatherApp from "./weatherApp.png";
import wAppVanilla from "./wappVanilla.png";
import dictionary from "./dictionary.png";
import shampoo from "./shampoo.png";

export default function Projects(){
    return(
        <div className="Projects">
            <div className="container">
            
                    <h3>Projects</h3>
                
<CardColumns className="cards">

<Col className="gx-4 gy-4">
  <Card style={{ width: '15rem'}}  >
        <a href="https://goofy-goldberg-e66c09.netlify.app/" target="_blank" rel="noreferrer" className="link">
    <Card.Img variant="top" src={calculator} size="100px160" />
    <Card.Body>
      <Card.Title>Calculator</Card.Title>
      <Card.Text style={{'font-size': '14px'}}>
        This is a site made with vanilla javascript
      </Card.Text>
    </Card.Body>
    </a>
  </Card>
</Col>
<Col  className="gx-4 gy-4">
  <Card style={{ width: '15rem' }}>
      <a href="https://vigorous-euclid-17656d.netlify.app" target="_blank" rel="noreferrer" className="link">
    <Card.Img variant="top" src={weatherApp} size="100px160"/>
    <Card.Body>
      <Card.Title>Weather App</Card.Title>
      <Card.Text style={{'font-size': '14px'}}>
        This is a weather app made with React and an receives real time data from an api.
      </Card.Text>
    </Card.Body>
    </a>
  </Card>
</Col>

 <Col  className="gx-4 gy-4">
  <Card style={{ width: '15rem' }}>
       <a href="https://ecstatic-mirzakhani-8a5e03.netlify.app" target="_blank" rel="noreferrer" className="link">
    <Card.Img variant="top" src={wAppVanilla} size='100px160' />
    <Card.Body>
      <Card.Title>Weather App</Card.Title>
      <Card.Text style={{'font-size': '14px'}}>
        This app doesn't use React, but still uses an api like the first.
      </Card.Text>
    </Card.Body>
    </a> 
  </Card>
</Col>
<Col className="gx-4 gy-4">
  <Card style={{ width: '15rem' }}>
      <a href="https://sharp-noether-12af75.netlify.app" target="_blank" rel="noreferrer" className="link">              
    <Card.Img variant="top" src={dictionary} size="100px120" />
    <Card.Body>
      <Card.Title>Dictionary</Card.Title>
      <Card.Text style={{'font-size': '14px'}}>
        This is a dictionary search engine made with React.
      </Card.Text>
    </Card.Body>
    </a> 
  </Card> 
  </Col>
  <Col className="gx-4 gy-4">
  <Card style={{ width: '15rem' }}>
      <a href="https://627e99467e6471062e31fd4c--spiffy-marigold-8b3b7d.netlify.app/" target="_blank" rel="noreferrer" className="link">              
    <Card.Img variant="top" src={shampoo} size="100px120" />
    <Card.Body>
      <Card.Title>Shampoo Company</Card.Title>
      <Card.Text style={{'font-size': '14px'}}>
        This is a mock shampoo company's landing page.
      </Card.Text>
    </Card.Body>
    </a> 
  </Card> 
  </Col>
</CardColumns>
           
        </div>
        </div>
    )
}