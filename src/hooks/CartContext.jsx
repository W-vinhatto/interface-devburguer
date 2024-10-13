import {
    useContext,
    createContext,
    useEffect,
    useState,
} from "react";

const CartContext = createContext({})


export const Cartprovider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    // feito esse use state para subistituir de products ai funciona
      const [ abacate, setabacte] = useState([])


    const putProductsCart = (product) => {

        // procurando caso exista prod no cart
        const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id)

        let newProductsInCart = []
        // caso exista adiciona + 1 no quantity
        if (cartIndex >= 0) {
            newProductsInCart = cartProducts

            newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1
            setCartProducts(newProductsInCart)
            upDateLocalStorage(newProductsInCart)
        } else {
            // se não existe cria campo quantity e add cart
            product.quantity = 1
            newProductsInCart = [...cartProducts, product]
            setCartProducts(newProductsInCart)
            upDateLocalStorage(newProductsInCart)
        }

    }


    const clearCart = () => {
        setCartProducts([])
        upDateLocalStorage([])
    }



    const deletProducts = (productId) => {
        // pegando todos os produtos q tenha id diferente do productId
        const newCart = cartProducts.filter((prod) => prod.id !== productId)

        setCartProducts(newCart)
        upDateLocalStorage(newCart)
    }



    const increseProduct = (productId) => {
        const newCart = cartProducts.map((prod) => {
            return prod.id === productId
                ? { ...prod, quantity: prod.quantity + 1 }
                : prod
        })

        setCartProducts(newCart)
        upDateLocalStorage(newCart)
    }



    const decreseProduct = (productId) => {
        // achando produtos para tirar um por vez
        const cartIndex = cartProducts.findIndex((prod) => prod.id === productId)

        // fazendo verificação caso quantidade seja maior q 1
        // se sim a logica para menos um
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prod) => {
                return prod.id === productId
                    ? { ...prod, quantity: prod.quantity - 1 }
                    : prod
            })

            setCartProducts(newCart)
            upDateLocalStorage(newCart)
            // se valor for um exclua prod
        } else {
            deletProducts(productId)
        }
    }


    const upDateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
    }

    useEffect(() => {
        const loadingProducts = localStorage.getItem('devburguer:cartInfo')

        if (loadingProducts) {
            setCartProducts(JSON.parse(loadingProducts))
        }
    }, [])


    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductsCart,
                clearCart,
                deletProducts,
                increseProduct,
                decreseProduct
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!CartContext) {
        throw new Error('useCart must be used with a context')
    }
    return context
}
