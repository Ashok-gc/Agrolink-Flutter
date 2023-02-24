import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link  } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import userSevices  from '../services/userSevices';


function Userdetails({isLogged, setIsLogged}){
    const [user, setUser] = useState({});


    const [firstname, setFirstname] = useState("Kiran");
    const [lastname, setLastname] = useState("Rana");
    const [email, setEmail] = useState("kiran@gmail.com");
    const [password, setPassword] = useState("password");
  
    

    useEffect(() => {
        userSevices.getoneuser(isLogged).then((response) => {
            console.log(response.data);
            setUser(response.data);
            })
            .catch((error) => {
            console.log(error);
            }
            )
    },[])


    const updateuser = async (e) => {
        e.preventDefault();
        
        try {
          const res = await userSevices.updateuser(isLogged,{ firstname, lastname,email,password});
          console.log(res);
            
          localStorage.clear();
          window.location= "/login"
          return toast.success('update successfully')
            } catch (error) {
          console.log(error);
          return toast.error('update failed')
        }
       
      }
    

    return(
        <Helmet title='Signup'>
        <section>
          <Container>
            <Row>
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Update Details </h3>
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
                    type="email" 
                    placeholder= {user.email} 
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
              
                <button type='submit' onClick={updateuser} className="buy__btn auth__btn">Update Profile</button>
                
     
              </Form>
             </Col>
              
           </Row>
         </Container>
        </section>
  
       </Helmet>
    )
}

export default Userdetails