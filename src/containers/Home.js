import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel } from "react-bootstrap";
import coronaVirus from "./coronaVirus.png";
import slCovidGraph from "./slCovidGraph.jpg";
import covidWorldwide from "./covidWorldwide.jpg";
import graphsAndTrends from "./graphsAndTrends.jpg";
import rearchCardPicHome from "./rearchCardPicHome.jpg";
import news from "./news.jpg";
import books from "./books.jpg";
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

      <div className="mainPanel" style={{ width: 1200, marginLeft: 150 }}>
        <div class="row" style={{ marginLeft: 100 }}>
          <div className="card bg-dark" style={{ marginTop: 50 }}>
            <Card style={{ width: "18rem" }}>
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
                <Button variant="primary">Click Me</Button>
              </Card.Body>
            </Card>
          </div>

          <div
            className="card bg-dark"
            style={{ marginLeft: 400, marginTop: 50 }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={news} alt="news" />
              <Card.Body>
                <Card.Title>Latest News</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div class="row" style={{ marginLeft: 100, marginTop: 50 }}>
          <div className="card bg-dark">
            <Card style={{ width: "18rem" }}>
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
                <Button variant="primary">Click Me</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="card bg-dark" style={{ marginLeft: 400 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={books} alt="books" />
              <Card.Body>
                <Card.Title>Latest Publications</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click Me</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
