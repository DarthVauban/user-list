import {usersSlice} from "./usersSlice";
import {$api} from "../../config/axios";


export const loadUsers = () => async (dispatch) => {
    try {
        dispatch(usersSlice.actions.usersFetching())
        const response = await $api.get("users")
        dispatch(usersSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(usersSlice.actions.usersFetchingErrors(e.message))
    }
}