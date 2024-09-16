import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'

import { Register } from './containers/Register/index.jsx'
import { Login } from './containers/Login/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme='colored' />
    <Login />
  </StrictMode>,
)
