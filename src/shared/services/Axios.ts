import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from 'axios'
import { merge } from '../helpers'

interface RequestConfig extends AxiosRequestConfig {
    handleError?: (e: any) => void
}

class Axios {
    #config

    #instance

    constructor(config: RequestConfig) {
        this.#config = config
        this.#instance = axios.create(config)
    }

    update(config: RequestConfig) {
        this.#instance = axios.create(merge(this.#config, config))
    }

    appendResponseInterceptor = (interceptor: any) => {
        this.#instance.interceptors.response.use((r) => r, interceptor)
    }

    appendRequestInterceptor = (
        interceptor: (
            config: InternalAxiosRequestConfig
        ) => InternalAxiosRequestConfig
    ) => {
        this.#instance.interceptors.request.use((config) => interceptor(config))
    }

    makeRequest<T = unknown>(
        method: string,
        url: string,
        options: RequestConfig = {}
    ) {
        const headers = {
            ...this.#instance.defaults.headers,
            ...options.headers,
        }

        // @ts-ignore
        return this.#instance({
            ...options,
            method,
            url,
            headers,
        })
            .then((resp: AxiosResponse) => resp?.data as T)
            .catch(({ response }: AxiosError) => {
                if (this.#config.handleError) {
                    this.#config.handleError(response)
                }

                return Promise.reject(response)
            })
    }

    setAuthToken(auth_token?: string) {
        if (auth_token) {
            this.#instance.defaults.headers.common.Authorization = `Bearer ${auth_token}`
        } else delete this.#instance.defaults.headers.common.Authorization
    }

    get = <T>(url: string, config?: AxiosRequestConfig) =>
        this.makeRequest<T>('get', url, config)

    post = <T>(url: string, config?: AxiosRequestConfig) =>
        this.makeRequest<T>('post', url, config)

    put = <T>(url: string, config?: AxiosRequestConfig) =>
        this.makeRequest<T>('put', url, config)

    patch = <T>(url: string, config?: AxiosRequestConfig) =>
        this.makeRequest<T>('patch', url, config)

    del = <T>(url: string, config?: AxiosRequestConfig) =>
        this.makeRequest<T>('delete', url, config)

    requestHandlers = {
        get: this.get,
        post: this.post,
        put: this.put,
        patch: this.patch,
        del: this.del,
    }
}

export default Axios
