import {postsSlice} from "./postsSlice";
import {$api} from "../../config/axios";


export const loadPosts = (id) => async (dispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching())
        const response = await $api.get(`users/${id}/posts`)
        dispatch(postsSlice.actions.postsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(postsSlice.actions.postsFetchingErrors(e.message))
    }
}