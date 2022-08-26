import { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string
}

interface ITech {
  id: string;
  created_at: string;
  status: string;
  title: string;
  update_at: string
}

interface IUser {
  id?: string;
  name: string;
  email: string;
  course_module: string;
  bio: string | null;
  contact: string
  created_at: string;
  update_at: string;
  avatar_url: string | null;
  techs: ITech[];
  works: string[];
}

interface ILogin {
  email: string;
  password: string
}

interface IAuthContext {
  user: IUser;
  signIn: (data: ILogin) => void
  registrar: (data: IRegister) => void
  setToken: Dispatch <string>
}

export const AuthContext = createContext <IAuthContext> ({} as IAuthContext);

interface IProvider {
  children: ReactNode
}

const Providers = ({ children }: IProvider) => {

  const [user, setUser] = useState <IUser> ({} as IUser);
  const history = useNavigate();
  const [token, setToken] = useState <string> (window.localStorage.getItem("@token") as string)

  useEffect(() =>{
      Api.get("profile", {headers: {"Authorization": `Bearer ${token}`}})
      .then(response => {console.log(response);
       history("/dashboard")})
      .catch(err => window.localStorage.clear())
    ;
  },[])

  const registrar = async (data: IRegister) => {
    console.log(data);

    Api.post("users", data)
      .then((response) => {history("/")
      console.log(response)})
      .catch((err) => toast.error(err.response.data.message));
  };

  const signIn = async (data: ILogin) => {
    console.log(data);

    await Api.post("sessions", data)
      .then((response) => {
        history("/dashboard");
        window.localStorage.setItem("@token", response.data.token);
        window.localStorage.setItem("@userId", response.data.user.id);
        setToken(response.data.token)
        setUser(response.data.user)
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return ( <AuthContext.Provider value={{ user, signIn, registrar, setToken }}>
            {children}
        </AuthContext.Provider>
  )
};

export default Providers;

export const UseAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}
