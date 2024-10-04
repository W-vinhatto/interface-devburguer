import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import '../style.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";



export default function CheckoutForm() {

    const { cartProducts, clearCart } = useCart()
    const navigate = useNavigate()


    const stripe = useStripe();
    const elements = useElements();

    const { state: { dpmCheckerLink } } = useLocation()


    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Stripe ou elemento com erro tente novamente')
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            // opção tem que manter pois msm que de certo queremos que aplicação continue
            redirect: 'if_required',
        });


        if (error) {
            setMessage(error.message);
            toast.error(error.message)
        } else if
            (paymentIntent && paymentIntent.status === "succeeded") {
            try {

                const products = cartProducts.map((produt) => {
                    return {
                        id: produt.id,
                        quantity: produt.quantity,
                        price: produt.price
                    }
                })


                const { status } = await api.post('/order', { products },
                    {
                        validateStatus: () => true
                    }
                );
                if (status === 200 || status === 201) {
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
                    }, 3000)

                    clearCart()
                    toast.success('Pedido realizado com Sucesso!')

                } else if (status === 400) {
                    toast.error('falha ao realizar seu pedido')
                } else {
                    throw new Error()
                }

            } catch (error) {
                toast.error("Falha no sitema Tente novamente")
            }
        } else {
            // caso não der erro mas pagamento sej reprovado
            // stripe irá atualizar status e manda pra prox pag para mostrar na tela
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button
                    className="button"
                    disabled={isLoading || !stripe || !elements}
                    id="submit">
                    <span id="button-text">
                        {isLoading ?
                            <div
                                className="spinner"
                                id="spinner">

                            </div> : "Pagar Agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
            <div id="dpm-annotation">
                <p>
                    Os métodos de pagamentos são
                    disponibilizados de acordo com sua região.&nbsp;
                    <a
                        className="link"
                        href={dpmCheckerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="dpm-integration-checker">
                        ver métodos de Pagamento
                    </a>
                </p>
            </div>
        </div>
    );
}