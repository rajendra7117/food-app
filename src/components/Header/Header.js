import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showCart, setShowCart] = useState(true);
  const itemsCount = useSelector((state) => state.cart.cartItems);
  const [bump, setBump] = useState(false)
  const [path, setPath] = useState('/cart')
  const history = useHistory()

  const changeScreen = e => {
      history.push(`${path}`)
  }
  useEffect(() => {
    if (location.pathname === "/cart") {
    
      setShowCart(false);
      setPath('/')
    }
    else{
      setShowCart(true)
      setPath('/cart')
    }
  }, [location]);

  useEffect(() => {
    setBump(true)
    setTimeout(() => {
      setBump(false)
    },500)
   
  }, [itemsCount])
 
 
  return (
    <div className="header">
      <h1>Mcdonald's</h1>
      <span className="header-icon">
        {showCart ? (<><FaShoppingCart onClick={changeScreen} className={`cart-icon ${bump ? 'bump' : ''}`}/> <span className="count">{itemsCount.length}</span></>) : (<span className='menu-icon'><MdRestaurant onClick={changeScreen} /> </span>)}
        
      </span>
      
    </div>
  );
};

export default Header;
