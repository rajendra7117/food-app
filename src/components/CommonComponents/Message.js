import React from 'react'
import './Message.css'
import { NavLink } from 'react-router-dom'
const Message = ({img, text}) => {
  return (
    <div className='message'>
        <p>{text}</p>
        <img src={img} alt="food-image"/>
        <NavLink to="/" className="nav-link">Return to Menu page</NavLink>
    </div>
  )
}

export default Message