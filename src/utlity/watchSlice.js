import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
    name: "watch",
    initialState: {
        watchData: null,
        watchHistory:[],
        
    },
    reducers:{
        addWatchData:(state,action)=>{
             state.watchData = action.payload

        },
        addWatchHistory:(state,action)=>{
            state.watchHistory.push(action.payload)
        }
    }
})


export const{ addWatchData,addWatchHistory } = watchSlice.actions;
export default watchSlice.reducer;