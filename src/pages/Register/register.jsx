import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";

const Register = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string().required("Senha obrigatória"),
    confirmarSenha: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    contato: yup.string().required("Contato obrigatório"),
    modulo: yup.string().required("Módulo obrigatório"),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {console.log(data)
  
  Api
  .post("users", {
      email: data.email,
      password: data.senha,
      name: data.nome,
      bio: data.bio,
      contact: data.contato,
      course_module: data.modulo
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};
    
    return (
        <div>
        <h2>Logo</h2>
        <button onClick={() => history.push("/")}>Fechar</button>
        <div className="container">
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
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
              {...register("senha")}
            />
            {errors.senha && <span>{errors.senha.message}</span>}
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
            <select name="" id="" {...register("modulo")}>
              <option value="">Primeiro módulo (Introdução ao Frontend)</option>
              <option value="">Segundo módulo (Frontend avançado)</option>
              <option value="">Terceiro módulo (Introdução ao Backend)</option>
              <option value="">Quarto módulo (Backend avançado)</option>
            </select>
          </form>
          <button type="submit">Cadastrar</button>
        </div>
      </div>
    );
};

export default Register;
