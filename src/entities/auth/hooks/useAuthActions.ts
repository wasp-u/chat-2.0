import { useSession } from '../../../app/providers/AuthProvider'
import { refresh, signIn, signUp } from '../api'
import { LoginRequestData, SignUpRequestData } from '../model/auth'

export const useAuthActions = () => {
    const { login, logout } = useSession()

    const refreshSession = async () => {
        try {
            const res = await refresh()

            login(res)
        } catch (e) {
            console.error(e)
        }
    }

    const onSignIn = async (data: LoginRequestData) => {
        const res = await signIn(data)

        login(res)
    }

    const onSignUp = async (data: SignUpRequestData) => {
        const res = await signUp(data)

        login(res)
    }

    const onSignOut = async () => {
        logout()
    }

    return { onSignIn, onSignOut, onSignUp, refreshSession }
}
