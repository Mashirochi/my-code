import axios from "axios";

const registerNewUser = (email, phone, username, password) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email, phone, username, password
    })
}

const loginUser = (email, password) => {
    return axios.post("http://localhost:8080/api/v1/login", {
        email, password
    })
}

export {
    registerNewUser, loginUser
};