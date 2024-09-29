

import { CardContainer, DivButton } from './style'
import { formatPrice } from '../../utils/formatPrice'
import { Button } from '../../components/Button'


export function Card({ products }) {
    return (
        <CardContainer>
            <img src={products.url} />
            <p>{products.name}</p>
            <DivButton>
                <strong>{formatPrice(products.price)}</strong>
                <div>
                    <Button>+</Button>
                </div>
            </DivButton>
        </CardContainer>
    );
}