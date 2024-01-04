import { createSlice } from "@reduxjs/toolkit";

const subscriberDataSlice = createSlice({
    name: "subscriberData",
    initialState: {
        subscriberDataList: null,
        subscriptions: [],
    },
    reducers:{
        addSubscriberData:(state,action)=>{
            state.subscriberDataList = action.payload;

        },
        addSubscription:(state,action)=>{
            
                
                       state.subscriptions.push(action.payload) 
                  
            
        },
        unsubcsribe:(state,action)=>{
            const idToRemove = action.payload;
            state.subscriptions = state.subscriptions.filter((e)=>e.id!==idToRemove)
        }
    }
})


export const{ addSubscriberData,addSubscription,unsubcsribe } = subscriberDataSlice.actions;
export default subscriberDataSlice.reducer;