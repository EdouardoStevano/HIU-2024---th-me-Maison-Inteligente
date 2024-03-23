import { toast } from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css';

/**
 * Classe qui affiche la notification,
 * success pour la reussite,
 * error pour l'erreur et 
 * info pour les informations
 */
class Notification {
    success(message){
        toast.success(message)
    }

    error(message){
        toast.error(message)
    }

    info(message){
        toast.info(message)
    }
}

export default Notification