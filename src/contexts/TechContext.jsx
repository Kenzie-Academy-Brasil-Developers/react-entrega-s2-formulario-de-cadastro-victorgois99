import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, useState } from "react";


export const TechContext = createContext();

const TechProviders = ({children}) =>{

    const [modal, setModal] = useState(false);
    const [token] = useState(window.localStorage.getItem("@token"))

    const deletar = async (id) =>{

        await Api.delete(`users/techs/${id}`, {
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(response => {toast.success("Tecnologia excluida")})
        .catch((err) => console.log(err))
    }

    const createTech = async (data) =>{
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