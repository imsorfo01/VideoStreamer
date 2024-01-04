import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen = !state.isMenuOpen 

        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;

        }
    }
})


export const{ toggleMenu,closeMenu } = userSlice.actions;
export default userSlice.reducer;