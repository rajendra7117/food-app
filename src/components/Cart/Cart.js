import React, { useState, useEffect } from "react";
import foodImg from '../../images/bibimbap.png'
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartOptions from "./CartOptions";
import Message from "../CommonComponents/Message";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
 
  const [items, setItems] = useState(cartItems);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);
  return (
    <div className="cart">
      {items?.length>0 ? (<>   <div className="items">
        <h2 className="cart-heading">Cart</h2>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
        ))}
      </div>
      <CartOptions items={items.length} totalAmount={totalAmount} /></>) : (<Message text="Your cart is empty, try some new food" img={foodImg}/>)}
   
    </div>
  );
};

export default Cart;
