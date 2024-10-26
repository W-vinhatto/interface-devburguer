
import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Cardapio, Cart, Checkout, CompletePayment, Welcome } from "../containers";


import PrivateRoute from './privateRoutes'; 

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/home',
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