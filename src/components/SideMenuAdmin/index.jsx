import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import listLinks from './menu-list'

import { Container, ItemContainer, ListLinks } from "./style";
import { useUser } from '../../hooks/UserContext';



export function SideMenuAdmin({ path }) {

    const { logout } = useUser()

    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLinks to={item.link}>
                        {item.label}
                    </ListLinks>
                </ItemContainer>
            ))}
            <hr></hr>

            <ItemContainer className='linkExit' >
                <LoginOutlinedIcon style={{ color: '#fff' }} />
                <ListLinks to="/" onClick={logout}>Sair</ListLinks>
            </ItemContainer>
        </Container>
    )
}