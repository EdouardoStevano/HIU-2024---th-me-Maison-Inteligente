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