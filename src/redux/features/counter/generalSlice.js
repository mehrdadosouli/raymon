import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme:localStorage.getItem('theme') || 'light'
}

export const counterSlice = createSlice({  
  name: 'general',  
  initialState,  
  reducers: {  
    changeThemeState: (state, action) => {  
        state.theme=action.payload
    }  
  },  
})  

export const { changeThemeState, } = counterSlice.actions

export default counterSlice.reducer