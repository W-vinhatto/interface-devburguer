import styled from "styled-components";

import bgcolor from "../../assets/BG Lights effect.svg"

export const ContainerBg = styled.div`

    min-height: 100vh;
    background: url('${bgcolor}');

    background-size: cover;
    background-color: #242329;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 0;

    img {
        filter: drop-shadow(0  20px  1.5rem darkorange);
    }

    h1 {
        color: #ffffff;
        position: absolute;
        top: 45%; 
        font-size: 55px;
        text-align: center;
        letter-spacing: 2.5px;
        color: #ffffff;

        font-family: "Road Rage", sans-serif;


        spam {
        color: #FB8A04;

        font-family: "Road Rage", sans-serif;

    }
    }
    

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
`

export const PDescrition = styled.p`
    color: #FB8A04;
    font-family: "Road Rage", sans-serif;
    text-align: center;
    font-size: 30px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
        width: 100%;
        height: 45px;
        border: 0.5px solid  #FB8A04;
        border-radius: 5px;
        background-color: transparent;
        color: #fff;
        font-size: 16px;
        padding-left: 10px;
    }

    label {
        font-size: 16px;
        color: #fff;
    }
`

export const Link = styled.h2`
    color: #ffffff;
    font-size: 16px;

    a {
        color:  #FB8A04;
    }
`

export const ErrosForm = styled.p`
    font-size: 14px;
    color: #cf3057;
    line-height: 80%;
    height: 10px;
`
