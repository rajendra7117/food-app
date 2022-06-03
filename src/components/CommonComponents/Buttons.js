import React from 'react'
import './Buttons.css'
import {FaMinus, FaPlus} from 'react-icons/fa'

const Buttons = ({addItem, removeItem, count}) => {
    const addItemHandler = e => {
        addItem()
    }
    const removeItemHandler = e => {
        removeItem()
    }

  return (
    <div className='cart-buttons'>
                <button onClick={removeItemHandler}>{<FaMinus />}</button>
                <span>{count}</span>
                <button onClick={addItemHandler}><FaPlus /></button>
       </div>
  )
}

export default Buttons