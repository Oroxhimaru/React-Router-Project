import React from 'react'
import { useParams } from 'react-router-dom'


//need useParams for using userid here
const User = () => {
    // Use destructuring to get the specific parameter you need (e.g., 'userid')
    const { userid } = useParams()

  return (
    <div  className='bg-gray-600 text-white text-3xl p-4'>User: {userid} </div>
  )
}

export default User