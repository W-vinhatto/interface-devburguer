import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    padding: 30px 10px;
    display: grid;


    gap: 10px;
    align-items: center;

    width: 100%;
    max-width: 500px;

    h2 {
        width: 100%;
    }
`


export const Card = styled.div`
    width: 250px;
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