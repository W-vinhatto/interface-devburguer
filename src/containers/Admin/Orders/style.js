import styled from "styled-components";
import ReactSelect from 'react-select'

export const Contaeiner = styled.div`
    background-color: #efefef;
    min-height: 100vh;
`

export const ProductsImg = styled.img`
    width: 60px;
    border-radius: 5px;
`

export const SelectStyle = styled(ReactSelect)`
    width: 200px;

    .css-13cymwt-control {
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;

    @media screen and (max-width: 630px) {
        gap: 15px;
        font-size: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
`

export const LinkMenu = styled.a`
    color: #323d5d;
    cursor: pointer;

    font-weight: ${props => props.isActiveStatus ? 'bold' : '400'};
    border-bottom: ${props => props.isActiveStatus ? '1px solid #323d4d' : 'none'} ;
`