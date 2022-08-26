import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, Dispatch, ReactNode, useState } from "react";

interface ICreateTech {
    title: string;
    status: string
}

interface ITechProviders {
    children: ReactNode
}

interface ITechContext {
    modal: boolean
    setModal: Dispatch<boolean>
    deletar: (id:string) => void
    createTech: (data: ICreateTech) => void
}


export const TechContext = createContext <ITechContext> ({} as ITechContext);

const TechProviders = ({children}: ITechProviders) =>{

    const [modal, setModal] = useState <boolean> (false);
    const token: string | null = window.localStorage.getItem("@token")

    const deletar = async (id: string) =>{

        await Api.delete(`users/techs/${id}`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(response => {toast.success("Tecnologia excluida")})
        .catch((err) => console.log(err))
    }

    const createTech = async (data: ICreateTech) =>{
        console.log(data)

        await Api.post("users/techs", data,{
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(response => {toast.success("Tecnologia criada com sucesso!");
        setModal(false)})
        .catch((err) => toast.error(`${err.response.data.message}`))
    }

    return (
    <TechContext.Provider value={{modal ,setModal, deletar, createTech}}>
        {children}
    </TechContext.Provider>
    )
}

export default TechProviders