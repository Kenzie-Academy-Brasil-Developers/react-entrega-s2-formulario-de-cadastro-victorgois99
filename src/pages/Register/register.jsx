import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import logo from "../../assets/img/Logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, DivLogo, Form } from "./styles";
import { motion } from "framer-motion";
import {useContext} from "react"
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
    confirmarSenha: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("senha")], "As senhas precisam ser iguais."),

    bio: yup.string().required("Bio obrigatória"),
    contato: yup.string().required("Contato obrigatório"),
    course_module: yup.string().default("Primeiro módulo (Introdução ao Frontend)")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const {registrar} = useContext(AuthContext)

  // const onSubmitFunction = (data) => {
  //   console.log(data);

  //   Api.post("users", {
  //     email: data.email,
  //     password: data.senha,
  //     name: data.nome,
  //     bio: data.bio,
  //     contact: data.contato,
  //     course_module: type,
  //   })
  //     .then((response) => history.push("/"))
  //     .catch((err) => toast.error(err.response.data.message));
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1}}
    >
      <Container>
        <DivLogo>
          <img src={logo} alt="logo" />
          <button onClick={() => history.push("/")}>Voltar</button>
        </DivLogo>
        <Form>
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
          <form className="form" onSubmit={handleSubmit(registrar)}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("nome")}
            />
            {errors.nome && <span>{errors.nome.message}</span>}
            <label>E-mail</label>
            <input
              type="text"
              placeholder="Digite aqui seu e-mail"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <label>Senha</label>
            <input
              type="text"
              placeholder="Digite aqui sua senha"
              {...register("senha")}
            />
            {errors.senha && <span>{errors.senha.message}</span>}
            <label>Confirmar senha</label>
            <input
              type="text"
              placeholder="Digite novamente sua senha"
              {...register("confirmarSenha")}
            />
            {errors.confirmarSenha && (
              <span>{errors.confirmarSenha.message}</span>
            )}
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && <span>{errors.bio.message}</span>}
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contato")}
            />
            {errors.contato && <span>{errors.contato.message}</span>}
            <label>Selecionar módulo</label>
            <select
              name=""
              id=""
              {...register("course_module")}
            >
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend avançado)</option>
            </select>
            <button type="submit">Cadastrar</button>
          </form>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Register;
