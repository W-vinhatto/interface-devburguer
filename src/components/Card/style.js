import styled from "styled-components";


export const CardContainer = styled.div`
    width: 230px;
   

    border: solid 1px #FB8A04;
    border-radius: 10%;

    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 15px 5px;

    justify-content: space-between;


    img {
        height: 100px;
        border-radius: 15px;
    }

    p {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        width: 90%;
        border-radius: 15px;
        text-align: center;
        padding: 10px ;
        
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap
    }
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    strong {
        color: #fff;
        font-size: 20px;
    }

    div {
        width: 52px;
        border-radius: 50%;
    }
`