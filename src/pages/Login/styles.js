import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter";
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;

  img{
    margin: 30px 0;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212529;
  width: 50vh;
  padding: 30px 10px;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px 0;
  }

  h1 {
    font-size: 18px;
    color: #f8f9fa;
  }

  label {
    font-size: 12px;
    color: #f8f9fa;
    margin: 6px 0;
  }

  input {
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
    background-color: #FF577F;
    color: #FFFFFF;
    font-family: "Inter";
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #FF577F;
    margin: 10px 0;
    padding: 10px 20px;
    cursor: pointer;
  }
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 20px;

  p {
    font-size: 12px;
    color: #868e96;
    margin-bottom: 10px;
  }

  button {
    border: 1px solid #868E96;
    width: 100%;
    background-color: #868E96;
    margin: 10px;
  }
`;

export const DivInput = styled.div`
    width: 100%;

    input{
        width: 100%;
    }

    .anticon{
        position: absolute;
        margin: 3vh -2vw 0 -2vw;
    }

`
