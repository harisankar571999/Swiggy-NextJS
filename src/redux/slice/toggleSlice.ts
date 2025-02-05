
import { createSlice } from "@reduxjs/toolkit";
export const toggleSlice=createSlice({
    name:'toggle',
    initialState:{
        veg:false,
        nonVeg:false
    },
    reducers:{
        vegToggle:(state)=>{
            state.veg=!state.veg
        },
        NonVegToggle:(state)=>{
            state.nonVeg=!state.nonVeg
        }
    }
})
export  const {vegToggle,NonVegToggle}=toggleSlice.actions
export default toggleSlice.reducer