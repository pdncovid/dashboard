import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel,Col,Row } from "react-bootstrap";
import coronaVirus from "./coronaVirus.png";
import slCovidGraph from "./slCovidGraph.jpg";
import covidWorldwide from "./covidWorldwide.jpg";
import graphsAndTrends from "./graphsAndTrends.jpg";
import rearchCardPicHome from "./rearchCardPicHome.jpg";
import news from "./news.jpg";
import books from "./books.jpg";
import { Link } from 'react-router-dom';
//import './style.css';

const Home = (props) => {
  return (
    <div className="bg">
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
          }}
        >
          <b>University of Peradeniya : COVID Research Group</b>
        </h1>

        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 50,
            fontFamily: "Comic Sans MS, cursive, sans-serif",
          }}
        >
          Welcome to the official website of the COVID Research group of the
          Univeristy of Peradeniya.
        </h2>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={coronaVirus}
              width="10"
              height="400"
              alt="coronaVirus"
              style={{ margin: "auto", marginTop: 50, marginBottom: 50 }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={slCovidGraph}
              width="10"
              height="400"
              alt="slCovidGraph"
              style={{ margin: "auto", marginTop: 50, marginBottom: 50 }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={covidWorldwide}
              width="10"
              height="400"
              alt="covidWorldwide"
              style={{ margin: "auto", marginTop: 50, marginBottom: 50 }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      
      <div className = "mainPanel container bg-light">
      <Row className = "container-fluid mt-4">
      <Card className = "container mt-4 mb-4" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={graphsAndTrends}
                alt="graphsAndTrends"
              />
              <Card.Body>
                <Card.Title>Graphs and Trends</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" style={{marginLeft:70}}>Read More</Button>
              </Card.Body>
            </Card>
            
          
            <Card className = "container mt-4 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={news} alt="news" />
              <Card.Body>
                <Card.Title>Latest News</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/news">
                <Button  type='button' style={{marginLeft:70}}>Read More</Button>
                </Link>
              </Card.Body>
            </Card>
            
            </Row>

            <Row className = "container-fluid">
      <Card className = "container mb-4" style={{ width: "18rem" }}>
      <Card.Img
                variant="top"
                src={rearchCardPicHome}
                alt="rearchCardPicHome"
              />
              <Card.Body>
                <Card.Title>Research</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/research">
                <Button variant="primary" style={{marginLeft:70}}>Read More</Button>
                </Link>
              </Card.Body>
            </Card>
            
          
            <Card className = "container mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={books} alt="books" />
              <Card.Body>
                <Card.Title>Latest Publications</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" style={{marginLeft:70}}>Read More</Button>
              </Card.Body>
            </Card>
            
            </Row>
            </div>
            <div style={{ height: 50 }}></div>
    </div>
  );
};

export default Home;
