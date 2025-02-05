import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:"itemCount",
    initialState:{},
    reducers:{
        addItem:(state,action)=>{
            const id=action.payload.id
            if (!state[id]) {
                state[id] = {...action.payload,count:1}
              }
        },
        IncrementItem:(state,action)=>{
            const id=action.payload.id
            if(state[id]){
                state[id].count +=1
            }
        },
        DecrementItem:(state,action)=>{
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