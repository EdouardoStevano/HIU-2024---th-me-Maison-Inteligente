import { useEffect } from 'react'
import Notification from '../notification'


/**
 * Ce composant affiche un message si le token a expiré
 */
const AuthTokenExpired = () => {
    useEffect(() => {
        try {
            const config = localStorage.getItem("config")
            const { isExpired } = JSON.parse(config)
            if (isExpired) {
                Notification.prototype.info("Votre session a expiré")
                localStorage.removeItem("config")
            }
        } catch (e) { }
    }, [])
    return null
}

export default AuthTokenExpired