import Axios from "axios";

const axios=Axios.create({
    baseURL:process.env.NEXT_PUBLIC_BACKEND_URL,
    headers:{
        "X-Requested-With":"XMLHttpsRequest",
        'Authorization':null
    },
    withCredentials:false
})

export default axios