import styled from "styled-components";

export const StyledModal = styled.div`

    position: fixed;
    display: flex;
    flex-direction: column;
    width: 25%;
    min-height: 40vh;
    margin-left: 550px;
    background-color: #212529;
`;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;

    h1{
        font-size: 14px;
        color: #F8F9FA;
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
    margin: 10px;

    form{
        display: flex;
        flex-direction: column;
        margin: 10px;

    }

    label{
        color: #F8F9FA;
        font-size: 12px;
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
        margin: 10px;
        width: 90%;
        color: #FFFFFF;
        font-size: 16px;
    }
`;