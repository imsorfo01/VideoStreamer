import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        searchList: null,
    },
    reducers:{
        addSearchList :(state,action)=>{
            state.searchList = action.payload;
        }    
    }
})

export const {addSearchList}=searchSlice.actions;
export default searchSlice.reducer;