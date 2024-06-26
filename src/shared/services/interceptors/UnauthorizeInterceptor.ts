import { AxiosError } from 'axios'

const unauthorizeStatus = [401]

export const UnauthorizeInterceptor = (error: AxiosError) => {
    const status = error.response?.status

    if (status && unauthorizeStatus.includes(status)) {
        localStorage.removeItem('token')
    }
}
