import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    background-color: #efefef;
    justify-content: flex-start;

    @media screen and (max-width: 650px){
        flex-direction: column;
    }
`

export const ContainerItems = styled.div`
    padding: 20px;
    width: 100%;
`

