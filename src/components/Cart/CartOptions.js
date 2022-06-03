import React, {useState, useEffect} from 'react'
import {BiRupee} from 'react-icons/bi'
import Confirmation from './Confirmation'
const CartOptions = ({items, totalAmount}) => {
   const [discount, setDiscount] = useState(0)
   const [percentage, setPercentage] = useState(0)
   const [showModal, setShowModal] = useState(false)
   const [text, setText] = useState('')


  
const toggleModal = (txt, e) => {
        setShowModal(prev => !prev)
        setText(txt)
        
}
useEffect(() => {

    if(totalAmount>101){
        if(totalAmount<=500){
                setDiscount(Math.floor(totalAmount*10/100))
                setPercentage(10)
        }
        else if(totalAmount>500){
            setDiscount(Math.floor(totalAmount*20/100))
            setPercentage(20)
        }
        
      }
      else{
          setDiscount(0)
          setPercentage(0)
      }

}, [totalAmount])
  return (
    <div className='cart-options'>
        <h3>Cart Details</h3>
        <div className='cart-info'>
            <span className='border'></span>
           <span><h4>Total Items</h4> <h4>{items}</h4></span>
           <span><h4>Subtotal</h4><h4><BiRupee />{totalAmount}</h4></span>
           <span><h4>Discount</h4><h4>{percentage}% - <BiRupee className='rupee' />{discount}</h4></span>
           <span className='border'></span>
           <span><h4>Total</h4><h4><BiRupee />{totalAmount-discount}</h4></span>
        </div>
        <div className='cart-info-buttons'>
            <button onClick={toggleModal.bind(this, 'Are you sure you want to clear your cart')}>Clear cart</button>
            <button onClick={toggleModal.bind(this, 'Please confirm to place your order')}>Place Order</button>

        </div>
        {showModal && <Confirmation toggleModal={toggleModal} text={text}/>}
    </div>
  )
}

export default CartOptions