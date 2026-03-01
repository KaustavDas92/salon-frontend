import { createContext, useContext, useState } from "react";

const AuthContext=createContext()

const AuthProvider = ({children}) =>{
    const [userData,setUserData]=useState()
    const [isLoggedIn,setIsLoggedIn]=useState(false)

    const value={
        userData,
        isLoggedIn
    }

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}
function useAuth(){
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}