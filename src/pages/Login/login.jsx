import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const Login = () => {
    const history = useHistory();
    
    const [type, setType] = useState("password")

    const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string().required("Senha obrigatória")
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {console.log(data)

  Api
    .post("sessions", {
        email: data.email,
        password: data.senha
    }) 
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};


  return (
    <div>
      <h2>Logo</h2>
      <div className="container">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="e-mail" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor="">Senha</label>
          <input type={type} placeholder="senha" {...register("senha")} />
          {type === "password"
          ? <EyeFilled onClick={() => setType("text")} />
          : <EyeInvisibleFilled onClick={() => setType("password")} />
        }
          {errors.senha && <span>{errors.senha.message}</span>}
          <button type="submit">Entrar</button>
        </form>
        <div className="divRegister">
            <p>Ainda não possui uma conta?</p>
          <button onClick={() => history.push("/register")}>
            Ir para Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
