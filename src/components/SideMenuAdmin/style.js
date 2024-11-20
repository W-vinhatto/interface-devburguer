import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container  = styled.div`
    background-color: #3c3c3c;
    box-shadow: 0px 0px 14px rgba(0,0,0, 0.15);
    width: 300px;
    top: 0;
    left: 0;


    @media screen and (max-width: 650px){
        width: 100%;
    }


    hr {
        margin: 50px 15px;

        @media screen and (max-width: 650px){
        margin: 5px 15px;
    }
    }

`


export const ItemContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background-color: ${props => props.isActive ? '#565656' : 'none'} ;
    border-radius: 2px;
    margin: 8px;
   
    padding-left: 20px;
    gap: 5px;

    .icon {
        color: #fff;
    }

    .linkExit{
        position: fixed;
        bottom: 30px;

        @media screen and (max-width: 650px){
            position: static;
    }
}
`



export const ListLinks = styled(Link)`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    text-decoration: none;
`