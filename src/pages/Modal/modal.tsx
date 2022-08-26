import { Container, Form, HeaderModal, StyledModal } from "./styles";
import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormSchema {
  title: string;
  status: string
}

export const Modal = () => {
  const { setModal, createTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().default("Iniciante"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <IFormSchema>({
    resolver: yupResolver(formSchema),
  });

  const fecharModal = async (data) => {
    await createTech(data);
  };

  return (
    <Container>
      <StyledModal>
        <HeaderModal>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => setModal(false)}>X</button>
        </HeaderModal>
        <Form>
          <form onSubmit={handleSubmit(fecharModal)}>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
            {errors.title && <span>{errors.title.message}</span>}
            <label htmlFor="">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Cadastrar tecnologia</button>
          </form>
        </Form>
      </StyledModal>
    </Container>
  );
};
