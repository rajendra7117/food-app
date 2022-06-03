import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {cartItems: [],
                    totalAmount: 0},
    reducers:{
        addToCart(state, action){
            let id = action.payload.id
    
            if(state.cartItems.length===0){
                state.cartItems = [action.payload]
                state.totalAmount = state.totalAmount+action.payload.price
            }
            else{
                let existingItemIndex = state.cartItems.findIndex((item) => item.id===id)
                if(existingItemIndex>=0){

                    let existingItem = state.cartItems[existingItemIndex]
                    
                existingItem.quantity = existingItem.quantity+1
              
                state.cartItems[existingItemIndex] = existingItem
                state.totalAmount=state.totalAmount+existingItem.price
                }
                else{
                    state.cartItems = [...state.cartItems, action.payload]
                    state.totalAmount = state.totalAmount+action.payload.price
                }
                
            }
        },
        removeFromCart(state, action){
            let id = action.payload.id 
            let existingItemIndex = state.cartItems.findIndex((item) => item.id===id)
            
            let existingItem = state.cartItems[existingItemIndex]
           
            if(existingItem.quantity===1){
                state.cartItems=state.cartItems.filter((item) => item.id!==id)
                state.totalAmount=state.totalAmount-existingItem.price
            }
            else{
                existingItem.quantity = existingItem.quantity-1
                state.cartItems[existingItemIndex]=existingItem
                state.totalAmount=state.totalAmount-existingItem.price
            }

        },
        clearCart(state, action){
            state.cartItems=[]
            state.totalAmount=0
        }
    }
})

export const cartSliceActions = cartSlice.actions

export default cartSlice;