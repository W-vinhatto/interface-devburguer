
import bacground from "../../assets/lanche-bacground.svg"
import { Button } from "../../components/Button"

import {
    ContainerBg,
    Container,
    Fomr,
    InputContainer,
    Link,
} from './style'

export function Register() {
    return (
        <ContainerBg>
            <img src={bacground} alt="image-lanche" />
            <h1>OLIMPO'S <spam>BURGUER</spam></h1>
            <Container>
                <p> !! PREPARADO !! <br/>
                    saboreia criações dignas das mais grandiosas lendas. Que os deuses da
                    gastronomia estejam com você!
                </p>

                <Fomr>
                    <InputContainer>
                        <label> Nome </label>
                        <input placeholder="Nome" type="text" />
                    </InputContainer>

                    <InputContainer>
                        <label> Email </label>
                        <input placeholder="E-mail" type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label> Senha </label>
                        <input placeholder="Senha" type="password" />
                    </InputContainer>

                    <InputContainer>
                        <label> Confirmar senha </label>
                        <input placeholder="Confirmar senha" type="password" />
                    </InputContainer>

                    <Button>Cadastrar</Button>
                </Fomr>
                <Link>Já possui conta? <a>Clique aqui.</a></Link>
            </Container>
        </ContainerBg>
    )
}