import getConfig from "../config"


function getNavigation() {
    const { level } = getConfig()
    let sublinksDefault = [
        {
            "title": "Formulaire BCI",
            "link": "formbci"
        },
        {
            "title": "Liste de demande",
            "link": "listrequest"
        }
    ]

    if(level<=2){
        sublinksDefault.push({
            "title": "Initiation d'achat",
            "link": "initachat"
        })
    }

    if (level == 1) {
        return []
    }

    else if (level == 2) {
        return [
            {
                "title": "Commande",
                "icon": "fa-commenting",
                "sublinks": sublinksDefault
            },
            {
                "title": "Validation",
                "link": "request/validation",
                "icon": "fa-file-alt"
            },
            {
                "title": "Suivie",
                "link": "tracking",
                "icon": "fa-file-alt"
            }
        ]
    }

    else {
        return [
            {
                "title": "Demande",
                "link": "/dashboard",
                "icon": "fa-commenting",
                "sublinks": sublinksDefault
            },
            {
                "title": "Suivie",
                "link": "tracking",
                "icon": "fa-file-alt"
            }
        ]
    }
}

export default getNavigation
