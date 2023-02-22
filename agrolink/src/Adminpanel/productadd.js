import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import productServices from '../services/productServices';

function Addproduct () {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [productype, setProducttype] = useState("");
    const[shift, setShift] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
      
    const updateproduct = async (e) => {
        
        console.log(name, description, producttype,shift,time,location)
        e.preventDefault();
        setImage("https://images.unsplash.com/photo-1606787758881-8b8b0b5b0b1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
        try{
        const res = await productServices.create({ name, description, producttype,shift,time,location,image});
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
                <h3 className='fw-bold mb-4'>Product details </h3>
                <Form  onSubmit={updateproduct} className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Product Tittle"
                    value={name} 
                    onChange={(e)=> setName(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Price  per hour"
                    value={time} 
                    onChange={(e)=> setTime(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder="Product Description"
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder= "Location"
                    value={location} 
                    onChange={(e)=> setLocation(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text"
                    placeholder="Shift"
                    value={shift} 
                    onChange={(e)=> setShift(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text"
                    placeholder="Product Type"
                    value={producttype}
                    onChange={(e)=> setProducttype(e.target.value)} />
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

export default Addproduct