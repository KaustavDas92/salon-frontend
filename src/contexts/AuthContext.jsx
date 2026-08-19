import { createContext, useContext, useState } from "react";
import axios from "axios"
import Config from "../Config/Config.json"
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'
import { userStoreDetails } from "../redux/actions/AuthActions";
import { act } from "react";


const AuthContext=createContext()

const AuthProvider = ({children}) =>{

    const [userData,setUserData]=useState()
    const [accessToken,setAccessToken]=useState()
    const [loading,setLoading]=useState(false)
    const dispatch =useDispatch()
    

    async function loginUser(params) {
        try{
            setLoading(true)

            const response= await axios.post(Config.API_URL+Config.User_Login,params,
                {
                    withCredentials:true,
                    headers:{
                        'Content-Type':'application/json'
                    },
                }
            ).then((data) =>{
                console.log(data)            
                const actionData=userStoreDetails(data.data)
                console.log("action data=",actionData)
                dispatch(actionData)
                setLoading(false)
                toast.success("Login Successful")
                return true;
            })
            .catch((err) =>{
                console.log("Error:- ", err)
                setLoading(false)
                toast.error(err)
                return false
            })

            return response;
        }
        catch(error ){
            console.log(error)
            toast.error(err)
            setLoading(false)
            return false
        }
    }
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
                // console.log(data)
                const actionData=userStoreDetails(data.data)
                console.log("action data=",actionData)
                dispatch(actionData)
                setLoading(false)
                toast.success("Registration Successful")
                return true;
                
            })
            .catch((err)=>{
                toast.error(err)
                setLoading(false)
                return false
            })

            return response
        }
        catch(error){
            console.log(error)
            return false
        }

        
    } 

    const value={
        userData,
        registerUser,
        loginUser,
        loading
    }

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}
function useAuth(){
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}