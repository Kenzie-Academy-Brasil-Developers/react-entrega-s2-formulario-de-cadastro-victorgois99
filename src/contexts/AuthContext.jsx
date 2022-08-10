import { createContext, useState } from "react";
import Api from "../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const [token, setToken] = useState(window.localStorage.getItem("@token"))

  const autoLogin = async () =>{

    Api.get("profile", {headers: {"Authorization": `Bearer ${token}`}})
    .then(response => history.push("/dashboard"))
    .catch(err => window.localStorage.clear())
  }

  const registrar = async (data) => {
    console.log(data);

    Api.post("users", {
      email: data.email,
      password: data.senha,
      name: data.nome,
      bio: data.bio,
      contact: data.contato,
      course_module: data.course_module,
    })
      .then((response) => {history.push("/")
      console.log(response)})
      .catch((err) => toast.error(err.response.data.message));
  };

  const signIn = async (data) => {
    console.log(data);

    await Api.post("sessions", {
      email: data.email,
      password: data.senha,
    })
      .then((response) => {
        history.push("/dashboard");
        window.localStorage.setItem("@token", response.data.token);
        window.localStorage.setItem("@userId", response.data.user.id);
        setToken(response.data.token)
        setUser(response.data.user)
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return <AuthContext.Provider value={{ user, signIn, registrar, autoLogin }}>
            {children}
        </AuthContext.Provider>;
};

export default Providers;
