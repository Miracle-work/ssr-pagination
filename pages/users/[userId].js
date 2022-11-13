import axios from "../../lib/axios"

export default async function(id) {
    const response= await axios.get(`/v1/users?page=${id}`)
    const data=response.data
    return data;
}