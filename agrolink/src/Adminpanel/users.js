import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "./../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userSevices from "../services/userSevices";

function Homeadmin({ user, setuser }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const deleteuser = (id) => {
    var response = window.confirm("Are you sure you want to delete this user?");
    if (response) {
      userSevices
        .deleteuser(id)
        .then((response) => {
          console.log(response.data);
          setuser(user.filter((user) => user._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    userSevices
      .getalluser()
      .then((response) => {
        console.log(response.data);
        setuser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Helmet title="Admin dashbaord">
      <header></header>
      <CommonSection title="Users " />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th>Firstname</th>
                    <th>lastname</th>
                    <th>Username</th>

                    <th>Email</th>

                    <th>role</th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user) => {
                    return (
                      <tr>
                        <td>{user._id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.username}</td>

                        <td>{user.email}</td>

                        <td>{user.role}</td>
                        <td>
                          <Link
                            to={`/editpage/${user._id}`}
                            className="btn btn-primary"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => deleteuser(user._id)}
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
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Homeadmin;
