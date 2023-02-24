import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import ProductsList from "./../components/UI/ProductsList";
import products from "./../assets/data/products";
import { ListGroup, ListGroupItem } from "reactstrap";
import productServices from "../services/productServices";


function Shop() {
  //shop filter all products
  const [productsData, setProductsData] = useState(products);
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

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    }
  };

  /* I did search filter by item.productName not in item.category  */

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="search__box">
                {/* Passed here for search  handleSearch */}
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title"> Products</h2>
              </Col>
              <ProductsList data={product} />
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  );
}

export default Shop;
