import { useState } from "react"

// Importation du endpoint pour l'authentification
import { loginEndpoint } from "data/url/auth"

// Importation de l'api 
import UserRepository from "domain/repository/userRepository"
import getMessageError from "infra/http/messageError"
import api from "data/datasource/api/api"

/**
 * Hook pour gérer l'authentification
 */
function useAuthRequest({ user, onSuccess, onError }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleToken = (response) => {
        const { role, token, department, level, username } = response
        let config = {
            "token": token,
            "role": role,
            "department" : department,
            "isExpired": false,
            "username": username,
            "level" : level,
            "tokenReceivedAt": new Date(),
            "tokenExpiredAt": 900
        }
        localStorage.setItem("config", JSON.stringify(config))
    }

    const handleAuth = async () => {
        setIsLoading(true)
        setIsSubmitted(true)
        if (user.username == "" || user.password == "") {
            onError("Veuillez remplir la session et le mot de passe")
        }
        else {
            await UserRepository.prototype.login(api, { ...loginEndpoint, data: user })
                .then((resp) => {
                    console.log(resp.data)
                    if (resp.status >= 200 && resp.status < 300) {
                        handleToken(resp.data)
                        onSuccess(resp.data)
                    }
                    else {
                        onError(getMessageError(resp))
                    }
                })
        }
        setIsLoading(false)
    }

    return { handleAuth, isLoading, isSubmitted }
}

export default useAuthRequest