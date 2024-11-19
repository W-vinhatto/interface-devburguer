import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: #242329;
   
    height: 72px;
    padding: 0 7%;

    @media screen and (max-width: 7530px) {
       height: auto;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 7530px) {
       display: block;
    }
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5%;
    }

    hr {
        height: 24px;
        border: 1px solid  #FB8A04;
    }
`


export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? ' #FB8A04' : '#fff'};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: #FB8A04;
    }
`


export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`


export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            font-weight: 700;
            color: #FB8A04;
        }
    }
`


export const LinkLogout = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background: transparent;
    border: none;
`


export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

