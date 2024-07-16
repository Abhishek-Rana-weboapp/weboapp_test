import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../url/Url'

const useFetchTestimonials = () => {

    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchTestimonials = async()=>{
            setLoading(true)
            await axios.get(`${BASE_URL}/testimonial`)
            .then(res=>{
                setTestimonials(res.data.data)
                setLoading(false)
            })
            .catch(err=>{
                setLoading(false)
                setError(err)
            })
        }
        fetchTestimonials()
    },[])

  return {testimonials, loading, error}
}

export default useFetchTestimonials
