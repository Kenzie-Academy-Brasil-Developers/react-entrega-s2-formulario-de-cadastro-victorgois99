import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () =>{

    const history = useHistory();

    return( 
    <div>
        <button onClick={() => history.push("/")}>Voltar para Login</button>
    </div>
    );
}

export default Dashboard