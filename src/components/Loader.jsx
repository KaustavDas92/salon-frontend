import {RotatingLines} from "react-loader-spinner"
import { useAuth } from "../contexts/AuthContext"

export default function Loader(){

    const{loading} = useAuth()
    console.log("loading=",loading)
    return(

        <>
            <div className={loading?"loader-overlay":""}>

                <RotatingLines
                    strokeColor="grey"
                    strokeWidth = "5"
                    animationDuration= "0.75"
                    width="96"
                    visible ={loading}
                    
                />
            </div>
        </>
    )
}