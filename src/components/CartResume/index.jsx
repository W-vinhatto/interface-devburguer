import { Button } from '../index'

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';


import { Container } from "./style";


export function CartResume() {
    const navigate = useNavigate()
    const [finalprice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(500)

    const { cartProducts } = useCart()

    // atualizando price sempre que tem atualização no hooks products
    useEffect(() => {
        // usando reduce para agregar campor para soma de valores
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])


    const submitOrder = async () => {
        const products = cartProducts.map((produt) => {
            return {
                id: produt.id,
                quantity: produt.quantity,
                price: produt.price
            }
        })

        try {
            const { data } = await api.post('/create-payment-intent', { products })

            navigate('/checkout',
                {
                    state: data
                }
            )

        } catch (error) {
            toast.error("Falha no sitema Tente novamente")
        }

    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalprice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>

                <div>
                    <div className="container-botton">
                        <p>Total</p>
                        <p>{formatPrice(finalprice + deliveryTax)}</p>
                    </div>
                </div>
            </Container>
            <Button onClick={submitOrder} >Finalizar Pedido</Button>
        </div>
    )
}