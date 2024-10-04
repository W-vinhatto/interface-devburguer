import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        border-radius: 4px;
        background-color:  #FB8A04;
        font-size: 30px;
        color: #fff;
        transition: all 0.4s;
        border: none;

    &:hover{
        background-color: #ba6704;
    }
    }
`

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`

export const TotalPrice = styled.p`
    font-weight: bold;
`

export const TrashIcon = styled.button`
    background-color: transparent;
    border: none;
    color: red;
`