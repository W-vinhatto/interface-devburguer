import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    // chave publica da pagina inicial do stripe
    'pk_test_51Q5Ci5FbYEC7Vq59hWi1y0UApL4QtGYs7MmMLzNOiNik5puJzz6bR4w2d0ym4PTdFjQ8nfDQDqoa89NjUt0PZUrf00wbT16jt4'
)

export default stripePromise