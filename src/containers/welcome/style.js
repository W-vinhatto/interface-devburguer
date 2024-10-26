import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import bgLanche from '../../assets/burger-french.jpg'


export const Container = styled.div`
    background: url('${bgLanche}');
    background-size: cover;
    background-color: black;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    

    box-shadow: 
    rgba(0, 0, 0, 0.8) 50px 30px 50px 50px inset, 
    rgba(0, 0, 0, 0.8) 30px 50px 50px 50px inset;
`
export const ContainerInfo = styled.div`
    width: 50%;
    height: 100vh;

    padding: 10% 50px;

    span {
        color:  #FB8A04;
        font-size: 25px;
    }

    p {
        color: white;
        font-size: large;
        letter-spacing: 0.5px;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    padding: 20px 70px;
    gap: 30px;
    width: 50%;
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`