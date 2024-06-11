// import axios from 'axios'

import client from "../HTTP/api";

// import React from 'react'

export default function MyInterceptor4() {
 client.interceptors.request.use((req)=>{
    console.log(req, "axios Client ");
    return req;
 })
}
