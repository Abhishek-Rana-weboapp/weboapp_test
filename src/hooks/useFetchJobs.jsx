import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../url/Url'

const useFetchJobs = () => {

    const [jobs, setJobes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchTestimonials = async()=>{
            setLoading(true)
            await axios.get(`${BASE_URL}/jobs`)
            .then(res=>{
                setJobes(res.data.data)
                setLoading(false)
            })
            .catch(err=>{
                setLoading(false)
                setError(err)
            })
        }
        fetchTestimonials()
    },[])

  return {jobs, loading, error}
}

export default useFetchJobs
