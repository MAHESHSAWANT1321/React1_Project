//?Interceptor example here.
//!Intercepter method not suported to fetch method.
import axios from 'axios';

export default function MyInterceptor3() {
   axios.interceptors.response.use((res)=>{
    if(res?.data){
        return res.data;
    }else{
        return res;
    }
//we can ejected intercepter after some task is done like if user is login success intercepter is ejected.
// const myIntercepter = axios.interceptors.request.use(function (){/*....*/});
// axios.interceptors.request.eject(myIntercepter);

   })
}
