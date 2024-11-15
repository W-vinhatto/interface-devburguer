
import React from 'react'
import { Navigate } from 'react-router-dom'


function PrivateRoute({ children, isAdmin }) {
  const user = localStorage.getItem('deveburguer:userData')
  

  if (!user) {
    return <Navigate to="/login" />
  }


  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoute

