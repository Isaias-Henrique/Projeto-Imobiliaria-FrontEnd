import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "./utils";

export const AppContext = createContext({});


export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getLocalStorage();
        if (user) {
            setUser(user);
            //console.log('Usuário logado', user);
        }
    }, []);

    async function authenticate(email, password){
        Api.post('/session', {email, password})
        .then((response) => {
            if (!response.data.error === true) {
                toast.error(response.data.message)
                
            }
            const id = response.data.user.id;
            const email = response.data.user.email;
            const payload = { token: response.data.token, email, id}       
            setUser(payload);
            setLocalStorage(payload);
            toast.success("Login efetuado com sucesso!");
            setTimeout(() => {
            window.location.href="/perfil";
            }, 1000);

        }).catch(() => {
            console.log('Erro: App Error')
        })

    }

    function logout(){
        setUser(null);
        setLocalStorage(null);
    }

    return (
        <AppContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AppContext.Provider>
    )
}