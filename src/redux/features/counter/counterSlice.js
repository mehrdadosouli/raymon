import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket:[],
}

export const counterSlice = createSlice({  
  name: 'products',  
  initialState,  
  reducers: {  
    increment: (state, action) => {  
      const existingProduct = state.basket.find(product => product.id === action.payload.id);  
      if (existingProduct) {  
        existingProduct.count += 1; 
      } else {  
        const newProduct = { ...action.payload, count: 1 }; 
        state.basket.push(newProduct);  
      }  
      console.log(state.basket);  
    },  
    decrement: (state, action) => {  
      const existingProduct = state.basket.find(product => product.id === action.payload.id);  
      if (existingProduct && existingProduct.count > 0) {  
        existingProduct.count -= 1; 
      }  
    },  
  },  
})  

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer