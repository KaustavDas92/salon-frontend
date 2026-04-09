import { createContext, useContext, useState } from "react";
import axios from "axios"
import Config from "../Config/Config.json"
import { toast } from "react-toastify";

const AuthContext=createContext()

const AuthProvider = ({children}) =>{
    const [userData,setUserData]=useState()
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [accessToken,setAccessToken]=useState()
    const [loading,setLoading]=useState(false)

    async function registerUser(data){
        try{
            setLoading(true);

            const response=await axios.post(Config.API_URL+Config.User_Registration,data,
                {
                    withCredentials:true,
                    headers:{
                        'Content-Type':'application/json'
                    },
                }
            ).then((data)=>{
                console.log(data)
                setAccessToken(data.data.accessToken)
                setLoading(false)
            })
            .catch((err)=>{
                toast.error(err)
                setLoading(false)
            })
        }
        catch(error){
            console.log(error)
        }
    } 

    const value={
        userData,
        isLoggedIn,
        registerUser
    }

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}
function useAuth(){
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}