import { createSlice } from "@reduxjs/toolkit";
import reducer from "./foodSlice";

export const cartSlice=createSlice({
    name:"itemCount",
    initialState:{},
    reducers:{
        addItem:(state:any,action)=>{
            const id=action.payload.id
            if (!state[id]) {
                state[id] = {...action.payload,count:1}
              }
        },
        IncrementItem:(state:any,action)=>{
            const id=action.payload.id
            if(state[id]){
                state[id].count +=1
            }
        },
        DecrementItem:(state:any,action)=>{
            const id=action.payload.id
            if (state[id]) {
                if (state[id].count > 1) {
                    state[id].count -= 1;
                } else {
                    delete state[id];
                }
            }
        }
    }
})
export const {addItem,IncrementItem,DecrementItem} = cartSlice.actions
export default cartSlice.reducer