import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";


const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus curus, feugiat primis ultricce a ligula rius auctor an`,
  
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus curus, feugiat primis ultricce a ligula rius auctor an`,

  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus curus, feugiat primis ultricce a ligula rius auctor an`,

  },
];

const Section2 = () => {
  return (
    <>
    <section className="about_section">
        <Container>
            <Row>
              <Col lg={{span:8, offset:2}} className="text-center">
                <h2>The Burger tastes better when you eat it with your family</h2>
                <p>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat </p>
                <Link to="/" className="btn order_now btn_red">
                    Explore Full Menu
                </Link>
              </Col>  
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
    <Container>
      <Row className='justify-content-md-center'>{mockData.map((cardData, index)=> (
        <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
          <div className="about_box text_center">
            <div className='about_icon'>
              <img src={cardData.image} className='img-fluid' alt="icon" />
            </div>
            <h4>{cardData.title}</h4>
            <p>{cardData.paragraph}</p> 
          </div>
        </Col>
       ))}</Row>
    </Container>

    </section>
    </>
  )
}

export default Section2;
