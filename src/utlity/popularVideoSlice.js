import { createSlice } from "@reduxjs/toolkit";

const popularVideoSlice = createSlice({
    name: "popularVideo",
    initialState: {
        popularVideos: [],
    },
    reducers:{
        addPopularVideo:(state,action)=>{
            state.popularVideos=action.payload

        }
    }
})


export const{ addPopularVideo } = popularVideoSlice.actions;
export default popularVideoSlice.reducer;