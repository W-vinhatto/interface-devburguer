import styled from "styled-components";
import bgcolor from "../../assets/BG Lights effect.svg"
import bgImageTop from "../../assets/bgcart.svg"
import { Link } from "react-router-dom";


export const Container = styled.div`
   
    min-height: 100vh;
    background: url('${bgcolor}');

    background-size: cover;
    background-color: #242329;

    
    padding: 10% 4%;
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

export const ContentTitle = styled.div`
    position: absolute;
    padding: 5px 20px;
`

export const Contentimg = styled.div`
    background: url('${bgImageTop}');
    height: 200px;
    
    padding: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: end;

    div {
        height: 100%;

        img {
            margin-right: 20px;
            margin-top: 40px;
            height: 100%;
        }
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

export const ContainerCategory = styled.div`
    border-radius: 20px;
    background: url('${bgImageTop}');
    padding: 10px;
`

