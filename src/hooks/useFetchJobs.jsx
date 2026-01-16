import { useEffect, useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../api/Url'

const useFetchJobs = () => {

    const [jobs, setJobes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchTestimonials = async()=>{
            setLoading(true)
            await axios.get(`${BASE_URL}job/`)
            .then(res=>{
                setJobes(res.data.data)
            })
            .catch(err=>{
                setError(err)
            }).finally(()=>{
                setLoading(false)
            })
        }
        fetchTestimonials()
    },[])

  return {jobs, loading, error}
}

export default useFetchJobs
