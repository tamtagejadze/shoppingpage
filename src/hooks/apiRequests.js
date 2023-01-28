import axios from "axios";

export default function apiRequests(method,endpoint, data){ 
    return axios({
        url:"https://fakestoreapi.com/"+ endpoint,
        method,
        data
})
.then(response => response.data)
}