import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api", 
    withCredentials: true, // Include credentials (cookies) in requests
});

export const userlogin = async ({email, password
}) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
}
export const userRegister = async ({email, password}) => {
    const response = await api.post('/auth/register',
         { email, password });
    return response.data;
}

export const getallusers = async () => {
    const response = await api.get('/auth/users');
   
    return response.data;
}
export const logout = async () => {
    const response = await api.get('/auth/logout');
    return response.data;
}