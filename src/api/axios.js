import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/",
    headers: {
        "Content-Type": "application/json",
    },
})


axiosInstance.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem("access_token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

