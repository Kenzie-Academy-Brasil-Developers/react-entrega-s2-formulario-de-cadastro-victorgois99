import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../services/api";
import logo from "../../assets/img/Logo.svg";
import { Container, DivHeader, DivInfo, DivMain } from "./styles";
import { motion } from "framer-motion";

const Dashboard = () => {
  const history = useHistory();

  const [data, setData] = useState("");

  const userId = window.localStorage.getItem("@userId");

  useEffect(() => {
    Api.get(`users/${userId}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });

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
                history.push("/");
                window.localStorage.clear();
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
          <div>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades!
            </p>
          </div>
        </DivMain>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
