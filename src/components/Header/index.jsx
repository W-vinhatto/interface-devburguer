
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

import {
    Container,
    Content,
    HeaderLink,
    LinkContainer,
    LinkLogout,
    Navigation,
    Options,
    Profile
} from "./style";



export function Header() {

    const navigate = useNavigate()
    const { pathname } = useResolvedPath()
    const { logout, userInfo } = useUser()


    function logoutUser() {
        logout()
        navigate('/login')
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/home" $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircle size={24} color="#fff" />
                        <div>
                            <p>Olá,
                                <span>
                                    {userInfo.name}
                                </span>
                            </p>
                            <LinkLogout onClick={() => { logoutUser() }}>
                                Sair
                            </LinkLogout>
                        </div>
                    </Profile>

                    <LinkContainer>
                        <ShoppingCart size={24} color="#fff" />
                        <HeaderLink to="/carrinho">
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>


            </Content>
        </Container>
    )
}