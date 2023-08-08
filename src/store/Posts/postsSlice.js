import { createSlice } from '@reduxjs/toolkit';


export const postsSlice = createSlice({
    name: 'posts',

    initialState: {
        posts: [],
        isLoading: false,
        errors: []
    },


    reducers: {
        postsFetching(state, action) {
            state.isLoading = true
        },
        postsFetchingSuccess(state, action) {
            state.isLoading = false
            state.errors = []
            state.posts = action.payload
        },
        postsFetchingErrors(state, action) {
            state.isLoading = false
            state.errors = action.payload
            state.posts = []
        }
    },
});

export default postsSlice.reducer