import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    margin: 0 auto;
    min-height: 100vh;

    h2{
    font-size: 18px;
    color: #F8F9FA;
    font-weight: bold;
}
`

export const DivHeader = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding: 10px 0;
border-bottom: 1px dashed #868E96;

div{
display: flex;
justify-content: space-between;
width: 60%;
margin: 0 auto;
margin-top: 20px;
}

button{
    border: none;
    background-color: #212529;
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 4px;
}

button:hover{
        background-color: #343B41;
    }
`

export const DivInfo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 0 auto;
border-bottom: 1px dashed #868E96;
padding: 30px 0;


div{
display: flex;
justify-content: space-between;
width: 60%;
margin: 0 auto;
margin-top: 20px;
}

p{
    font-size: 12px;
    color: #868E96;
}
`

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    p{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const MainTitle = styled.div`
    display: flex;
    flex-direction: space-between;
    width: 60%;
    margin: 0 auto;

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 20px 0;
    }

    h2{
        font-size: 18px;
        color: #F8F9FA;
    }

    button{
        background-color: #212529;
        color: #F8F9FA;
        font-size: 18px;
        border-radius: 4px;
    }

    button:hover{
        background-color: #343B41;
    }
`

export const Techs = styled.div`
    display: flex;
    flex-direction: space-between;
    width: 60vw;
    margin: 0 auto;
    background-color: #121214;
    padding: 20px;
    
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 15px;
        background-color: #212529;
        /* border-radius: 4px; */
    }

    h2{
        font-size: 14px;
        color: #FFFFFF;
    }

    p{
        font-size: 12px;
        color: #868E96;
    }

    button{
        background-color: #212529;
        border: none;
        padding: 15px 10px;
    }
`