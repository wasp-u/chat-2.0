import { ReactNode, useMemo, useState } from 'react'
import { contextFactory } from '../../shared'
import { UserModel } from '../../entities/user/model'

interface ContextProps {
    user: UserModel | null
    isAuth: boolean
    login: ({
        user,
        accessToken,
    }: {
        user: UserModel
        accessToken: string
    }) => void
    logout: () => void
}

const [useSession, Context] = contextFactory<ContextProps>()

interface Props {
    children: ReactNode
}

function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<UserModel | null>(null)

    const token = localStorage.getItem('token')
    const isAuth = useMemo(() => !!token, [token])

    const login = ({
        user,
        accessToken,
    }: {
        user: UserModel
        accessToken: string
    }) => {
        localStorage.setItem('token', accessToken)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    const contextValue = useMemo(
        () => ({ user, login, logout, isAuth }),
        [user, isAuth]
    )

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { AuthProvider, useSession }
