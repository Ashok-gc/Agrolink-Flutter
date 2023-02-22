import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productServices from "../services/productServices";

function Productadmin({ product, setproduct }) {
  useEffect(() => {
    productServices.getAll().then((res) => {
      setproduct(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteuser = (id) => {
    var response = window.confirm("Are you sure you want to delete this user?");
    if (response) {
      productServices
        .remove(id)
        .then((response) => {
          console.log(response.data);
          setproduct(product.filter((product) => product._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Helmet title="Admin dashbaord">
      
      <CommonSection title="Products " />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Image</th>

                    <th>Product Title</th>
                    <th>Description </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((product) => {
                    return (
                      <tr>
                        <td>{product._id}</td>
                        <td>
                          <div className="Product__img">
                            <motion.img
                              whileHover={{ scale: 0.9 }}
                              src={
                                "http://localhost:3001" +
                                product.image
                              }
                              alt=""
                            />
                          </div>
                        </td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>                       
                        <td>
                          <Link
                            to={`/editproduct/${product._id}`}
                            className="btn btn-primary"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => deleteuser(product._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <td></td>
                </tbody>
              </table>
             {/* <Link to={"/addproduct"} className="btn btn-secondary"> Add New Product</Link> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Productadmin;
