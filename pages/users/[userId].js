import axios from "../../lib/axios"

export default async function() {
    const response= await axios.get(`/v1/users?page=2`)
    const data=response.data
    return data;
}