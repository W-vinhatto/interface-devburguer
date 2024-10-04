

import logo from '../../assets/logoCart.svg'
import { CartItens, CartResume } from '../../components';


import { Banner, Container, Content, Title } from "./styles";


export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={logo} alt='logo loja' />
            </Banner>

            <Title>
                Checkout - Pedidos
            </Title>

            <Content>
                <CartItens />
                <CartResume/>
            </Content>
        </Container>
    )
}