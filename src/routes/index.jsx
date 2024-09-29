import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'
import { Cardapio } from "../containers/Cardapio";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart } from "../containers/Cart";

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
                <Footer/>
            </>
        )
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Cardapio />
                <Footer/>
            </>
        ) 
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart/>
                <Footer/>
            </>
        ) 
    }
])