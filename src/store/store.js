import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersSlice from "./Users/usersSlice";
import postsSlice from "./Posts/postsSlice";

const rootReducer = combineReducers({
    users: usersSlice,
    posts: postsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}