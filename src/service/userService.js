import axios from "axios"

const registerNewUser = (email, numPhone, username, password) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email, numPhone, username, password
    })
}

export { registerNewUser }