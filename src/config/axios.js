import axios from "axios";

const __API__ = "https://jsonplaceholder.typicode.com/"

export const $api = axios.create({
    baseURL: __API__
})