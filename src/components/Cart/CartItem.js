import React, {} from 'react'

import Buttons from '../CommonComponents/Buttons'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/CartSlice' 
import {BiRupee} from 'react-icons/bi'
import './CartItem.css'
const CartItem = ({name, img, price, quantity, id}) => {
  const dispatch = useDispatch()
  const addItem = e => {
    console.log(id)
      dispatch(cartSliceActions.addToCart({name: name, price: price, id: id, img: img, quantity: 1}))
  }

  const removeItem = e => {
     
        dispatch(cartSliceActions.removeFromCart({id: id}))
  }
  
  return (
    <div className='cart-item'>
        <div className='sec-1'>
        <img src={img} alt="food-item"/>
        </div>
        <div className='sec-2'>
            <h2>{name}</h2>
            <h4><BiRupee className='rupee'/>{price}</h4>
            <h5>Available</h5>
        </div>
        <Buttons addItem={addItem} removeItem={removeItem} count={quantity}/>
    </div>
  )
}

export default CartItem