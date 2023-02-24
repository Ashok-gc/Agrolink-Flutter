import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import heroImg from "../assets/images/onlinepic.png";
import slide1 from "../assets/images/intro1.png";
import slide2 from "../assets/images/intro2.png";
import slide3 from "../assets/images/intro3.png";

import counterImg from "../assets/images/counter-timer-img.png";

import Services from "../components/services/Services";

import ProductsList from "./../components/UI/ProductsList";

import products from "./../assets/data/products";

import { ListGroup, ListGroupItem } from "reactstrap";
import productServices from "../services/productServices";

function Home({ isLogged, setIsLogged }) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    productServices
      .getAll()
      .then((response) => {
        console.log(response.data);
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    setTrendingProducts(filteredTrendingProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <UncontrolledCarousel
        items={[
          {
            caption: "Get Delivered in Your Doorstep",
            key: 1,
            src: slide1,
          },
          {
            caption: "Get Delivered in Your Doorstep",
            key: 2,
            src: slide2,
          },
          {
            caption: "Get Delivered in Your Doorstep",
            key: 3,
            src: slide3,
          }
        ]}
      />

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              {/* <h2 className="section__title">Products</h2> */}
            </Col>
            {/* <ProductsList data={product} /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
