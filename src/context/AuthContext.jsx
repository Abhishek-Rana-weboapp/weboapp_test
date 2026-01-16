import { createContext, useContext, useState } from "react";


export const AuthContext = createContext(null);


export const AuthContextProvider = ({children})=>{
    const [accessToken, setAccessToken] = useState(() => sessionStorage.getItem("access_token"));

    const logout = () => {
        setAccessToken(null);
        sessionStorage.removeItem("access_token");
    };

    return <AuthContext.Provider value={{accessToken, setAccessToken, logout}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthContextProvider")
    }
    return context;
}

