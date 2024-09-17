import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme='colored' />
    <RouterProvider router={router}/>
  </StrictMode>,
)
