import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    padding: 20px;
`;

export const StyledModal = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #212529;
`;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;

    h1{
        font-size: 14px;
        color: #F8F9FA;
        margin: 10px 0;
    }

    button{
        border: none;
        background-color: inherit;
        font-size: 16px;
        color: #868E96;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 10px;

    form{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    label{
        color: #F8F9FA;
        font-size: 12px;
        margin: 10px 0;
    }

    input{
        width: 90%;
        padding: 10px;
        border-radius: 4px;
        border: none;
        outline: none;
        margin: 10px 0;
        background-color: #343B41;
        color:#FFFFFF;
    }

    span{
        color: red;
        font-size: 14px;
        margin: 10px 0;
    }

    select{
        width: 90%;
        padding: 10px;
        border-radius: 4px;
        border: none;
        outline: none;
        margin: 10px 0;
        background-color: #343B41;
        color:#FFFFFF;

    }

    button{
        background-color: #FF577F;
        border: none;
        border-radius: 4px;
        padding: 10px;
        margin: 10px 0;
        width: 90%;
        color: #FFFFFF;
        font-size: 16px;
    }
`;