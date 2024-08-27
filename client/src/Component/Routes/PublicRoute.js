import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = () => {

    if(localStorage.getItem('token'))
    {
        return <Navigate to = "/"></Navigate>

    }
    else{
        
    }
  return (
    <div>
      
    </div>
  )
}

export default PublicRoute
