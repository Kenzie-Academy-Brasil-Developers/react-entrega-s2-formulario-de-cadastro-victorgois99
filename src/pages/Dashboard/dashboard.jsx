import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="divHeader">
        <h1>Logo</h1>
        <button
          onClick={() => {
            history.push("/");
            window.localStorage.clear();
          }}
        >
          Voltar para Login
        </button>
      </div>
      <div className="divInfo">
          <h2>Olá, Nome</h2>
          <p>Modulo</p>
      </div>
      <div className="divMain">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades!</p>
      </div>
    </div>
  );
};

export default Dashboard;
