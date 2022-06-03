import React from 'react'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/CartSlice'
import { useHistory } from 'react-router-dom'
const Confirmation = ({text, toggleModal}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const cancelModal = e => {
        toggleModal()
    }
    const clearCart = e => {
        dispatch(cartSliceActions.clearCart())
        toggleModal()
        history.push('/')
    }
  return (
   <Modal>
       <div className='confirmation-modal'>
            <p>{text}</p>
            <div className='confirmation-buttons'>
                <button onClick={cancelModal}>cancel</button>
                <button onClick={clearCart}>confirm</button>
            </div>
       </div>
   </Modal>
  )
}

export default Confirmation