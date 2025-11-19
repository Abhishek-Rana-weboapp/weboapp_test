import axios from "axios"
import { BASE_URL } from "./Url"

export const fetchBlog = async(id)=>{
 await axios.get(`${BASE_URL}blog?id=${id}`)
 .then((res)=>{
    return res.data
 })
 .catch((err)=>{
    return err
 })
}