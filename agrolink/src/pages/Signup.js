import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup,
} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link,  } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';


function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState('');




  const handlesignup = async (e) => {
    e.preventDefault();
    
    try {
      const res = await userSevices.register({username, email, firstname, lastname, role, password});
      console.log(res);
     
      return toast.success('Signup successfully')

    } catch (error) {
      console.log(error);
     return  toast.error('Signup failed')
    }
   
  }



 return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='auth__form'>
              <FormGroup  className='form__group'>
                  <input 
                  type="text" 
                  placeholder='Firstname' 
                  value={firstname} 
                  onChange={(e)=> setFirstname(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input 
                  type="text" 
                  placeholder='lastname' 
                  value={lastname} 
                  onChange={(e)=> setLastname(e.target.value)} />
                </FormGroup>
            
            

                <FormGroup className='form__group'>
                  <input 
                  type="text" 
                  placeholder='Username' 
                  value={username} 
                  onChange={(e)=> setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}  />
              </FormGroup>
            
              <button type='submit' onClick={handlesignup} className="buy__btn auth__btn">Create an Account</button>
              <p>Already have an account?{" "} 
                <Link to='/login'>Login</Link>
              </p>
            </Form>
           </Col>
            
         </Row>
       </Container>
      </section>

     </Helmet>
  )
}

export default Signup;