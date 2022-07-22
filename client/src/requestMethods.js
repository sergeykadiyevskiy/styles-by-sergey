import axios from "axios";

const BASE_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDNhYzliZTg0NWQ4MzI3OWIxNmI4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODM0NjQ0MSwiZXhwIjoxNjU4NjA1NjQxfQ.gsTeKfpHo9oLu1K3goOpFA43YjIUY2yq8ZX-pBcGyLw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})