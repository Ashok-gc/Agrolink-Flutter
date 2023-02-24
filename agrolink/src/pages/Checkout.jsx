import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import '../styles/checkout.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';



function Checkout() {


  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const handleCheckout = (e) => {
    // navigator('/shop')

    return toast.success('Checkout Successfull')
  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Shipping Details</h6>
              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type='text' placeholder='Enter your name'  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='email' placeholder='Enter your email'  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='number' placeholder='Enter your phone number'  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='text' placeholder='Street address'  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='text' placeholder='City'  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type='text' placeholder='Country'  />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>रु{totalAmount}</span></h6>
                <h4>Total Cost: <span>रु{totalAmount}</span></h4>
                {/* <button className='buy__btn auth__btn w-100' onClick={handleCheckout} >Place an order</button> */}
                <button className='buy__btn w-100 mt-3' onClick={handleCheckout}>
                  <Link to='/home'>Complete Order</Link>
                </button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout