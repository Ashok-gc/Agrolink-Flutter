import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import productServices from '../services/productServices';

function EditProduct ({product}) {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setprice] = useState("");

    const navigate = useNavigate();
      
    const updateproduct = async (e) => {
        console.log(product._id);
        e.preventDefault();
        try{
        const res = await productServices.update(product._id,{name, description,price});
        console.log(res);
        navigate('/product')
        return toast.success('update successfully')

        }catch(error){
            console.log(error);
            return toast.error('update failed')
        }
    }

    return (
        <Helmet title='Product  details Update'>
        <section>
          <Container>
            <Row>
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Product Details </h3>
                <Form  onSubmit={updateproduct} className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder={product.name}
                    value={name} 
                    onChange={(e)=> setName(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={product.price}
                    value={price} 
                    onChange={(e)=> setprice(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={product.description}
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)} />
                  </FormGroup>
              
                <button type='submit' onClick={updateproduct}  className="buy__btn auth__btn">Update </button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )

}

export default EditProduct