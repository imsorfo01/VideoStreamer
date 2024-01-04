import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name:"suggestedData",
    initialState:{},
    reducers:{
        addSuggestedData:(state,action)=>{
            state = Object.assign(state, action.payload)
            
        }
    }
})

export const { addSuggestedData } = suggestionSlice.actions;
export default suggestionSlice.reducer;