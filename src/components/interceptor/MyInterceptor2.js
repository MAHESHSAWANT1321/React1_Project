//?Interceptor example here.
import axios from 'axios';

export default function MyInterceptor2() {
   axios.interceptors.response.use(
    (res) => res,
    (err) => {
        alert('Error intercepter called...')
        if(err.response.status === 404){
            throw new Error(`${err.config.url} not found`)
        }
        throw err;
    }
   );
}
