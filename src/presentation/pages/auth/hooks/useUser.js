import { useState } from "react"

const initialUser = {
    "username" : "",
    "password" : ""
}

/**
 * Hook pour gérer l'utilisateur
 */
function useUser(){
    const [user, setUser] = useState(initialUser)
    const handleUser = (e) => {
        const { name, value } = e.target
        setUser((user) => ({
            ...user,
            [name] : value
        }))
    }

    return { user, handleUser }
}

export default useUser