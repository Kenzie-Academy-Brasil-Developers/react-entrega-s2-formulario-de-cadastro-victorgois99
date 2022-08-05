import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../services/api";


const Dashboard = () => {
  const history = useHistory();

  const [data, setData] = useState("")
  
  const userId = window.localStorage.getItem("@userId")

  useEffect(() =>{
    Api
    .get(`users/${userId}`) 
    .then((response) => setData(response.data))
    .catch((err) => console.log(err));
  })


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
          <h2>Olá, {data.name}</h2>
          <p>{data.course_module}</p>
      </div>
      <div className="divMain">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades!</p>
      </div>
    </div>
  );
};

export default Dashboard;
