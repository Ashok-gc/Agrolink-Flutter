import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useParams , useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';



function Editpage ({user}) {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
  const[email, setEmail] = useState("");

    const [password, setPassword] = useState('');

    const navigate = useNavigate();
      
    
    const updateuser = async (e) => {
        e.preventDefault();
        
        try {
          const res = await userSevices.updateuser(user._id,{firstname, lastname, email, password});
          console.log(res);
            navigate('/adminhome')
          return toast.success('update successfully')
            } catch (error) {
          console.log(error);
          return toast.error('update failed')
        }
       
      }

    return (
        <Helmet title='User details Update'>
        <section>
          <Container>
            <Row>
               
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Profile details </h3>
                <Form className='auth__form'>
                <FormGroup  className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.firstname}
                    value={firstname} 
                    onChange={(e)=> setFirstname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.lastname}
                    value={lastname} 
                    onChange={(e)=> setLastname(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                    type="text" 
                    placeholder={user.email}
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} />
                  </FormGroup>
               
            

                 

                  <FormGroup className='form__group'>
                  <input 
                    type="password" 
                    placeholder='Enter your password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  />
                </FormGroup>
              
                <button type='submit' onClick={updateuser} className="buy__btn auth__btn">Create an Account</button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )

}

export default Editpage