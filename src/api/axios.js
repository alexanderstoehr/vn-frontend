import axios from "axios"

const baseUrl = "https://api.veenotes.com"

export const apiVeenotes = axios.create({
    baseURL: baseUrl,
})
