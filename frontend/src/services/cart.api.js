import axios from "axios"


const api = axios.create({
    baseURL : "https://portfolio-1jij.onrender.com/api/cart",
    withCredentials : true
})

export const createcart = async({productId}) => {
    const response = await api.post("/createcart" , {
        productId
    })
    return response.data
}


export const getcart = async() => {
    const response = await api.get("/getcart")
    return response.data
}
export const deletecart = async({productId}) => {
    const response = await api.post("/deletecart" , {
        productId
    })
    return response.data
}
export const createorder = async() => {
    const response = await api.post("/createorder")
    return response.data
}

export const getorder = async() => {
    const response = await api.get("/getorder")
    return response.data
}
export const editecart = async({productId , quantity}) => {
    const response = await api.post("/editcart" , {
        productId , quantity
    })
    return response.data
}