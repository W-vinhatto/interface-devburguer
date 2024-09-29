import styled from "styled-components";

import bg from "../../assets/bgcart.svg"

export const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 122px);

    background-color: #f0f0f0;
`

export const Banner = styled.div`
    background-color: #1f1f1f;
    background: url('${bg}');
    width: 100vw;
    height: 180px;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        height: 100%;
    }
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        bottom: 0;
        left: calc(50% - 33px);
        content: '';
        width: 56px;
        height: 4px;
        background-color: #61a120;
    }
`

export const Content = styled.div``
