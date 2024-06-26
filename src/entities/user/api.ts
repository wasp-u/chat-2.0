import Api from '../../shared/services'
import { UserModel } from './model'

export const getUsers = async () => {
    const data = await Api.get<UserModel[]>('api/v1/users')

    return data
}

export const searchUsers = async (queryString: string) => {
    const data = await Api.get<UserModel[]>(`api/v1/search?name=${queryString}`)

    return data
}
