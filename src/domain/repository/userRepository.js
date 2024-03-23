class UserRepository {

    async login(apiSource, options){
        const response = await apiSource(options)
        return response
    }
}

export default UserRepository