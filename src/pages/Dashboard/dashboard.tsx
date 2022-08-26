import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import logo from "../../assets/img/Logo.svg";
import lixo from "../../assets/img/Lixo.png";
import { Container, DivHeader, DivInfo, DivMain, MainTitle, Techs } from "./styles";
import { motion } from "framer-motion";
import { Modal } from "../Modal/modal";
import { TechContext } from "../../contexts/TechContext";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const history = useNavigate();

  const [data, setData] = useState({techs:[]});
  const {modal, setModal, deletar} = useContext(TechContext)
  const {setToken} = useContext(AuthContext)

  const userId = window.localStorage.getItem("@userId");


  useEffect(() => {
    Api.get(`users/${userId}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
    >
      <Container>
        <DivHeader>
          <div>
            <img src={logo} alt="logo" />
            <button
              onClick={() => {
                setToken ("");
                window.localStorage.clear();
                history("/");
              }}
            >
              Sair
            </button>
          </div>
        </DivHeader>
        <DivInfo>
          <div>
            <h2>Olá, {data.name}</h2>
            <p>{data.course_module}</p>
          </div>
        </DivInfo>
        <DivMain>
          <MainTitle>
            <div>
              <h2>Tecnologias</h2>
              <button onClick={() => setModal(true)}>+</button>
            </div>
          </MainTitle>
          {modal && <Modal />}
          {data.techs.length === 0     
          ?<p>Ainda não há tecnologias cadastradas</p>
          :
          (data.techs.map((elem) => 
          <Techs>
              <div>
                <h2>{elem.title}</h2>
                <p>{elem.status}</p>
              </div>
            <button onClick={() => deletar(elem.id) }>
              <img src={lixo} alt="" />
            </button>
          </Techs>
          ))} 
        </DivMain>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
