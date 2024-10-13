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

    box-shadow: 
        rgba(251,138,4, 0.3) 2px 6px 6px,
        rgba(251,138,4, 0.3) 2px 6px 15px;

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

export const Alert = styled.div`
    position: fixed;
    background-color: #242329;
    border-radius: 20px;


    bottom: 10px;
    width: 90%;

    color: #fff;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`

export const Checked = styled.div`
    position: fixed;
    z-index: 10;

    width: 92%;
    height: 100vh;
    top: 0;
  

    background-color: rgba(36, 35, 41, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 200px;
    }

    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
       
        
        background-color: rgba(36, 35, 41, 0.9);
        border-radius: 20px;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        padding: 30px 10px ;

        box-shadow: 
        rgba(251,138,4, 0.3) 2px 6px 6px,
        rgba(251,138,4, 0.3) 2px 6px 15px;
        border: solid 1px #FB8A04;
    }
`