import { createSlice } from '@reduxjs/toolkit';
import {$api} from '../../config/axios'

export const usersSlice = createSlice({
    name: 'users',

    initialState: {
        users: [],
        isLoading: false,
        errors: []
    },


    reducers: {
        usersFetching(state, action) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action) {
            state.isLoading = false
            state.errors = []
            state.users = action.payload
        },
        usersFetchingErrors(state, action) {
            state.isLoading = false
            state.errors = action.payload
            state.users = []
        }
    },
});

export default usersSlice.reducer