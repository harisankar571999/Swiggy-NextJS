import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { error } from "console";

export const fetchFoodData=createAsyncThunk("foodList",async()=>{
    const baseUrl = window.location.origin
   const res=await fetch(`${baseUrl}/api/foodslider`)
   const data=await res.json()
   return data
})

const foodSlice=createSlice({
    name:"foodList",
    initialState:{
        data:[],
        loading:false,
        error:null 
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFoodData.pending,(state)=>{
             state.loading=true
             state.error=null 
        })
        .addCase(fetchFoodData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        })
        .addCase(fetchFoodData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
            
        })
    }
})

export default foodSlice.reducer;