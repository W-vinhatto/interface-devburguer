

import { CardContainer, DivButton } from './style'
import { formatPrice } from '../../utils/formatPrice'
import { Button } from '../../components/Button'
import { ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/CartContext'



export function Card({ products }) {
    const { putProductsCart } = useCart()

    return (
        <CardContainer>
            <img src={products.url} />
            <p>{products.name}</p>
            <DivButton>
                <strong>{formatPrice(products.price)}</strong>
                <div>
                    <Button onClick={() => putProductsCart(products)} >
                        <ShoppingCart size={22} />
                    </Button>
                </div>
            </DivButton>
        </CardContainer>
    );
}