import Axios from './Axios'
import { AuthInterceptor } from './interceptors/AuthInterceptor'
import { UnauthorizeInterceptor } from './interceptors/UnauthorizeInterceptor'

class ApiWithMixins extends Axios {}

type ApiType = Axios

const Api = new ApiWithMixins({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    handleError: (e) => console.error(e),
}) as unknown as ApiType

Api.appendRequestInterceptor(AuthInterceptor)
Api.appendResponseInterceptor(UnauthorizeInterceptor)

export default Api
