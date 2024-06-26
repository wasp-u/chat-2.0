import { InternalAxiosRequestConfig } from 'axios'

export const AuthInterceptor = (config: InternalAxiosRequestConfig) => {
    const configWithHeader = { ...config }
    configWithHeader.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return configWithHeader
}
