
import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Header, Footer } from '../components'
import { useUser } from '../hooks/UserContext'

function PrivateRoute({ children }) {
 const user = localStorage.getItem('deveburguer:userData')


  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
