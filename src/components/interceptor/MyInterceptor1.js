//?Interceptor example here.
import axios from 'axios';

export default function MyInterceptor1() {
    axios.interceptors.request.use((req) => {
        console.log(req);
        req.headers["Authorization"] = 'SOME TOKEN';
        return req;
    });
}
