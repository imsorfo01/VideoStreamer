import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name: "like",
    initialState: {
        likeList: [],
    },
    reducers:{
        addToLikeList:(state,action)=>{
            state.likeList.push(action.payload)
        },
        removeFromLikeList:(state,action)=>{
            const idToRemove = action.payload;
            state.likeList = state.likeList.filter((e)=>e.id!==idToRemove)
        },
        clearLikeList:(state,action)=>{
            state.likeList = []
        }
    }
})

export const { clearLikeList,addToLikeList,removeFromLikeList } = likeSlice.actions;
export default likeSlice.reducer;