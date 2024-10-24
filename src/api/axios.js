import axios from "axios";

const baseUrl = ""

export const apiVeenotes = axios.create({
    baseURL: baseUrl
});
