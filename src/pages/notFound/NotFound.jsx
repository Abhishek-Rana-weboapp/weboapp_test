import React from 'react'
import Button from '../../components/buttons/Button'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    const navigate = useNavigate()
  return (
    <div className='h-screen flex justify-center items-center flex-col space-y-4'>
        <img src="/404.svg" alt="" className='md:w-[500px] w-72' />
        <p className='md:text-4xl text-2xl'> Page Not Found</p>
        <Button onClick = {()=>navigate(-1)} size='medium' >Go Back</Button>
    </div>
  )
}

export default NotFound
