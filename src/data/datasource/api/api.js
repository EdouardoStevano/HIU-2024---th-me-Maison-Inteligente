import axios from "axios";
import config from "core/envConfig";


const client = axios.create({baseURL : config.apiUrl})

/**
 * Api pour la recupération et l'envoi des données au serveur devhub  
 */
const api = async ({...options}) => {
    let config = localStorage.getItem("config")
    let token = ""
    if(config){
        config = JSON.parse(config)
        token = config.token
    }
    if(options.url != "/api/auth/"){
        client.defaults.headers.common.Authorization = `${token}`
    }
    
    const onSuccess = response => response
    const onError = error => error
    return client(options).then(onSuccess).catch(onError)
}

export default api

