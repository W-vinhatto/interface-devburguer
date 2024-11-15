
import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Cardapio, Cart, Checkout, CompletePayment, Welcome, Admin } from "../containers";
import { Header, Footer } from '../components'
import paths from '../constants/paths'

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
                    <Header />
                    <Home />
                    <Footer />
                </PrivateRoute>
            </>
        )
    },
    {
        path: '/cardapio',
        element: (
            <>
                <PrivateRoute>
                    <Header />
                    <Cardapio />
                    <Footer />
                </PrivateRoute>
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <>
                <PrivateRoute>
                    <Header />
                    <Cart />
                    <Footer />
                </PrivateRoute>
            </>
        )
    },

    {
        path: paths.Order,
        element: (
            <>
                <PrivateRoute isAdmin>
                    <Admin />
                </PrivateRoute>
            </>
        )
    },


    ,

    {
        path: paths.Products,
        element: (
            <>
                <PrivateRoute isAdmin>
                    <Admin/>
                </PrivateRoute>
            </>
        )
    },

    {
        path: paths.NewProduct,
        element: (
            <>
                <PrivateRoute isAdmin>
                    <Admin/>
                </PrivateRoute>
            </>
        )
    },

    {
        path: paths.EditProducts,
        element: (
            <>
                <PrivateRoute isAdmin>
                    <Admin/>
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