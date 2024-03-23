function getMessageError(error) {
    if (error.response!=undefined) {
        return error.response.data.message
    } else if (error.request) {
        return "Aucune réponse reçue: La requête a été effectuée mais aucune réponse n'a été reçue.";
    } else {
        return "Erreur de configuration de la requête: " + error.response;
    }
}

export default getMessageError