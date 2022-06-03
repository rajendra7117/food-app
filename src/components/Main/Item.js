import React, {useState, useEffect, memo} from 'react'
import './Item.css'
import images from '../../lib/Images'
import {BiRupee} from 'react-icons/bi'
import { cartSliceActions } from '../../store/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Buttons from '../CommonComponents/Buttons'
const Item = ({name, price, imgs, num, id, quantity}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems)
    
    let n = num 
    if(n===19){
        n=3
    }
   const [count, setCount] = useState(0)
    const addItem = e => {
        dispatch(cartSliceActions.addToCart({name: name, price: price, img: images[n].img, id: id, quantity: 1}))
    }
    const removeItem = e => {
        if(count!==0){
           dispatch(cartSliceActions.removeFromCart({id: id}))
        }
        
    }
    useEffect(() => {
        if(cartItems.length===0){
            setCount(0)
        }
        else{
         
            let itemId = cartItems.findIndex((item) => item.id===id)
            if(itemId>=0){
                let item = cartItems[itemId]
                setCount(item.quantity)
                
            }
            else{
                setCount(0)
            }
           
        }
    }, [cartItems, id])


  return (
    <div className='item'>
       <div className='sec-1'>
           <h3>{name}</h3>
           <h4><BiRupee />{price}</h4>
       </div>
       <div className='sec-2'>
           <img src={images[n].img} alt="food-item"/>
       </div>
       <Buttons addItem={addItem} removeItem={removeItem} count={count}/>
    </div>
  )
}

export default memo(Item)