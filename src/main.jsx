import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='colored' />
      {/* striper - forma de pagamento */}
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </AppProvider>
  </StrictMode>,
)
