import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    margin: 0 auto;
    height: 100vh;

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
width: 100%;
margin: 0 auto;
/* padding: 30px 0; */

div{
display: flex;
flex-direction: column;
width: 60%;
margin: 0 auto;
margin-top: 20px;
}

p{
    font-size: 14px;
    color: #FFFFFF;
    margin-top: 30px;
}
`