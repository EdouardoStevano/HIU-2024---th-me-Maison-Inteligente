function getCopyright() {
    const dateCreated = 2024
    const currentYear = (new Date()).getFullYear()

    if(currentYear<=dateCreated) {
        return `${dateCreated}-Accès Banque`
    }

    return `&copy;2024-${currentYear} Accès Banque`
}

export default getCopyright