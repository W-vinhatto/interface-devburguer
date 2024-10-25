
import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Cardapio, Cart, Checkout, CompletePayment } from "../containers";


import PrivateRoute from './privateRoutes'; 

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/',
        element: (
            <>
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            </>
        )
    },
    {
        path: '/cardapio',
        element: (
            <>
                <PrivateRoute>
                    <Cardapio />
                </PrivateRoute>
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <>
                <PrivateRoute>
                    <Cart />
                </PrivateRoute>
            </>
        )
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/complete',
        element: <CompletePayment />
    },
])