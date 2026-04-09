import axios from "axios";

export default function ApiClientConfig (){
    api=axios.create({
        baseURL: '/api',
        withCredentials: true
    })

    return api
}