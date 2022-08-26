import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import logo from "../../assets/img/Logo.svg";
import { Container, DivInput, Form, Register } from "./styles";
import { motion } from "framer-motion";
import { UseAuthContext } from "../../contexts/AuthContext";

interface IFormSchema {
  email: string;
  password: string
}

const Login = () => {
  const history = useNavigate();

  const [type, setType] = useState("password");

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter no mínimo 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <IFormSchema>({
    resolver: yupResolver(formSchema),
  });

  const {signIn} = UseAuthContext()

  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
    >
      <Container>
        <img src={logo} alt="logo" />
        <Form>
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit(signIn)}>
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="E-mail" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="">Senha</label>
            <DivInput>
              <input type={type} placeholder="Senha" {...register("password")} />
              {type === "password" ? (
                <EyeFilled onClick={() => setType("text")} />
              ) : (
                <EyeInvisibleFilled onClick={() => setType("password")} />
              )}
            </DivInput>
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit">Entrar</button>
          </form>
          <Register>
            <p>Ainda não possui uma conta?</p>
            <button onClick={() => history("/register")}>
              Cadastre-se
            </button>
          </Register>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Login;
