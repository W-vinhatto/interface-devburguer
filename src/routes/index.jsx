import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Home, Cardapio, Cart, Checkout, CompletePayment } from "../containers";

import { Header, Footer } from "../components";


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
                <Header />
                <Home />
                <Footer />
            </>
        )
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Cardapio />
                <Footer />
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
                <Footer />
            </>
        )
    },
    {
        path: '/checkout',
        element: <Checkout/>
    },
    {
        path: '/complete',
        element: <CompletePayment/>
    },
])