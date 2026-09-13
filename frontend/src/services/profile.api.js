import axios from "axios"


const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true
})

export const createprofile = async({bio}) => {
    const response = await api.post("/createprofile" , {
        bio 
    })
    return response.data
}
export const getprofile = async() => {
    const response = await api.get("/getprofile")
    return response.data
}