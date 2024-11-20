import { Button } from '../../components/Button'


import { Container, ContainerButton, ContainerInfo, DivLinear, Link } from "./style";



export function Welcome() {


    return (
        <Container>
            <DivLinear>
                <ContainerInfo>
                    <span>Bem-vindo à Hamburgueria do Olimpo!</span>
                    <br />
                    <br />
                    <p>
                        Prepare-se para uma experiência divina! Aqui, 
                        nossos hambúrgueres são como iguarias dos deuses. Cada mordida é uma viagem ao Olimpo, 
                        onde a qualidade e a paixão se encontram,
                        cercado por mitos e sabores que vão elevar seu paladar a novas alturas.
                        Que comece a festa dos sabores! 🍔✨
                    </p>
                </ContainerInfo>
                <ContainerButton>
                    <Button>
                        <Link to='/login'>
                            Logar
                        </Link>
                    </Button>
                    <Button>
                        <Link to='/cadastro'>
                            Criar Conta
                        </Link>
                    </Button>
                </ContainerButton>
            </DivLinear>
        </Container>
    )
}