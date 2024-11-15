import styled from "styled-components"
import { Button } from '../../../components/Button'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background-color: #565656;
        border-radius: 10px;
        padding: 30px;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`


export const Label = styled.p`
    font-size: 14px;
    color: #fff;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 14px rgba(0,0,0, 0.1);
    border: none;
    background-color: #fff;
    padding-left: 10px;
    width: 100%;
    min-width: 280px;
    margin-bottom: 4px;
`

export const TextArea = styled.textarea`
    height: 100px;
    border-radius: 8px;
    box-shadow: 0px 4px 14px rgba(0,0,0, 0.1);
    border: none;
    background-color: #fff;
    padding: 10px;
    width: 100%;
    min-width: 280px;
`

export const ButtonStyles = styled(Button)`
    margin-top: 25px;
`

export const LabelUploading = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 4px;
    
    
    color: #fff;
    max-width: 280px;
    gap: 5px;
    

    input {
        opacity: 0;
        width: 1px;
    }
`