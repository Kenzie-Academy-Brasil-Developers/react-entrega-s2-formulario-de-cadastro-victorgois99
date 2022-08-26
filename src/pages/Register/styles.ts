import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter";
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
`;

export const DivLogo = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
width: 50vh;

button{
    background-color: #212529;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
}
`

export const Form = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212529;
  width: 50vh;
  padding: 10px;

  h1{
    font-size: 18px;
    color: #F8F9FA;
    margin: 10px;
  }

  p{
    font-size: 12px;
    color: #868E96;
    margin: 10px 0;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  label{
    font-size: 12px;
    color: #F8F9FA;
  }

  input{
    border-radius: 4px;
    background-color: #343b41;
    padding: 10px;
    margin: 10px 0;
    border: none;
    outline: none;
    color: #FFFFFF;
  }

  select{
    border-radius: 4px;
    background-color: #343b41;
    padding: 10px;
    margin: 10px 0;
    border: none;
    outline: none;
    color: #FFFFFF;
  }

  span{
    margin: 8px 0;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: bold;
  }

  button{
    background-color: #59323F;
    color: #FFFFFF;
    font-family: "Inter";
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #FF577F;
    margin: 10px 0;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover{
    background-color: #FF577F;
  }
`;
