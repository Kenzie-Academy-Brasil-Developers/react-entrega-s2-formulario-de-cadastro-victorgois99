import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/img/Logo.svg";
import { Container, DivLogo, Form } from "./styles";
import { motion } from "framer-motion";
import { UseAuthContext } from "../../contexts/AuthContext";

interface IFormSchema {
  email: string;
  password: string;
  confirmPassword?: string
  name: string;
  bio: string;
  contact: string;
  course_module: string
}

const Register = () => {
  const history = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais."),

    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().default("Primeiro módulo (Introdução ao Frontend)")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <IFormSchema>({
    resolver: yupResolver(formSchema),
  });
  
  const {registrar} = UseAuthContext()

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
          <button onClick={() => history("/")}>Voltar</button>
        </DivLogo>
        <Form>
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
          <form className="form" onSubmit={handleSubmit(registrar)}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}
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
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <label>Confirmar senha</label>
            <input
              type="text"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
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
              {...register("contact")}
            />
            {errors.contact && <span>{errors.contact.message}</span>}
            <label>Selecionar módulo</label>
            <select
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
