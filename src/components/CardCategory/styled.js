import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    
    h2 {
        margin: 20px 0;
    }
`

export const Content = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    padding: 30px 0;

    width: 100%;

    gap: 10px;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media screen and (max-width: 540px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

export const Card = styled.div`
    min-width: 230px;
    max-width: 250px;
    height: 80px;

    background-color: #585858;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;


    &:hover {
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        border: solid 2px rgb(38, 57, 77);
    }

    p {
        color: #fff;
        font-size: 20px;
        margin-left: 5%;
    }
`


export const Divbutton = styled.div`
    width: 30%;
    height: 100%;
    background-color: rgb(178,34,34, 0.5);
    border-radius:0 20px 20px  0;
    

    &:hover {
        background-color: rgb(178,34,34, 0.9);
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

`

export const CategoryButton = styled(Link)`
        background-color: transparent;
        border: none;
        font-size: 40px;
        color: #fff;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            color: #FB8A04;
        }
`