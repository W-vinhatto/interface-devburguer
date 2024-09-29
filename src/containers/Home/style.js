import styled from "styled-components";
import bgcolor from "../../assets/BG Lights effect.svg"
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: url('${bgcolor}');

    background-size: cover;
    background-color: #242329;

    
    padding: 10% 5%;
    text-align: left;

    h2 {
        top: 45%; 
        font-size: 40px;
        letter-spacing: 2.5px;
        color: #FB8A04;

        font-family: "Road Rage", sans-serif;
    }

    h3 {
        color: #ffffff;
        font-size: 25px;
    }
`

export const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    gap: 14px;

    margin-top: 20px;
`

export const CategoryName = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 4px 3px 4px #FB8A04;


    overflow: hidden;
    border-bottom: ${props => props.$isactive ? '2px solid #FB8A04' : 'none'} ;

    &:hover {
        text-shadow: none;
    }
`

export const ContainerCarousel = styled.div``

export const ContainerCategory = styled.div``

