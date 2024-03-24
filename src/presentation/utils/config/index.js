function getConfig(){
    const config = localStorage.getItem("config")
    if(config) {
        const json = JSON.parse(config)
        return json
    }
    else {
        return {}
    }
}

export default getConfig

export const IP_API = "http://192.168.80.1:3000/";
export const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};
