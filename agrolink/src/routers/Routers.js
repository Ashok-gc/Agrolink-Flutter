import { Routes, Route, Navigate, useMatch } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Signup from './../pages/Signup';
import Checkout from './../pages/Checkout';
import { useEffect, useState } from 'react';
import Userdetails from "../pages/userdetails"
import Homeadmin from "../Adminpanel/home"
import Editpage from '../Adminpanel/Editpage';
import Productadmin from '../Adminpanel/product';
import EditProduct from '../Adminpanel/Editproduct';
import Addproduct from '../Adminpanel/productadd';
import Orders from '../Adminpanel/orders';



const Routers = () => {
  const [product, setproduct] =  useState([]);
   const [isLogged, setIsLogged] = useState("");
    const [user , setuser] =  useState([]);
   useEffect(() => {
      const user = localStorage.getItem("userid");
      if (user) {
        setIsLogged(user);
      }
    }, []);


    const match  = useMatch("/editpage/:id");
    const user1 =  match? user.find((user) => user._id === match.params.id) : null;

    const match1 = useMatch("/editproduct/:id");
    const product1 = match1? product.find((product) => product._id === match1.params.id) : null;
  return (
    <Routes>
    <Route path='/' element={<Navigate to ='home' />} />
      <Route path='home' element={<Home isLogged={isLogged} setIsLogged = {setIsLogged}/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='shop/:id' element={<ProductDetails/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='/userdetails' element={<Userdetails isLogged={isLogged} setIsLogged = {setIsLogged} />} />
      <Route path='/adminhome' element={<Homeadmin  user = {user}  setuser = {setuser}/>} />
      <Route path='/editpage/:id' element={<Editpage user = {user1} />} />
      <Route path='/product' element={<Productadmin product = {product} setproduct = {setproduct}/>} />
      <Route path='/editproduct/:id' element={<EditProduct product = {product1}/>} />
      <Route path='/addproduct' element={<Addproduct/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path ='/users' element={<Homeadmin  user = {user}  setuser = {setuser}/>} />
    </Routes>
  )
}

export default Routers