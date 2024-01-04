import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import popularVideoReducer from "./popularVideoSlice"
import watchReducer from "./watchSlice";
import subscriberDataReducer from "./subscriberDataSlice"
import likeReducer from "./likeSlice";
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"
import suggestedDataReducer from './suggestionSlice'

const appStore = configureStore({
    reducer:{
        user: userReducer,
        popularVideo:popularVideoReducer,
        watch: watchReducer,
        subscriberData:subscriberDataReducer,
        like:likeReducer,
        search:searchReducer,
        chat:chatReducer,
        suggesuggestedData:suggestedDataReducer
    }
})

export default appStore;