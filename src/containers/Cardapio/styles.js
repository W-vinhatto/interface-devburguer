import styled from "styled-components";

import bgcolor from "../../assets/BG Lights effect.svg"
import { Link } from "react-router-dom";


export const Container = styled.div`
    

    width: 100vw;
    min-height: 100vh;
    background: url('${bgcolor}');

    background-size: cover;
    background-color: #242329;

    padding: 10px;
`

export const  ContainerCardapio = styled.div`
    border: solid 1px #FB8A04;
    border-radius: 10px;

    padding: 5px;

    .carouselClass {
        padding-right: 10px;
    }

    

    h2 {
        font-family: "Londrina Sketch", sans-serif;
        color: #fff;
        font-size: 74px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 50px;
    }
`

export const ContainerCategory = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`


export const LinkCatgory = styled(Link)`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 4px 3px 4px #FB8A04;
    text-align: center;
    width: 400px;

    border-bottom: ${props => props.$isactive ? '2px solid #FB8A04' : 'none'} ;

    &:hover {
        text-shadow: none;
    }
`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;

    @media screen and (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`


export const CardContainer = styled.div`
    width: 180px;
    margin-top: 20px;


    border: solid 1px #FB8A04;
    border-radius: 20px;

    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 15px 5px;

    justify-content: space-between;


    img {
        height: 100px;
        border-radius: 15px;
    }

    p {
        color: #fff;
        width: 100%;
        border-radius: 15px;
        text-align: left;
        padding: 10px ;
        
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    strong {
        color: #fff;
        font-size: 20px;
    }

    div {
        width: 40%;
        border-radius: 50%;
    }
`