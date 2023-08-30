import axios from "./customizeApi";
// import axios from "axios";
const registerNewUser = (email, phone, username, password) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email, phone, username, password
    })
}

const loginUser = (email, password) => {
    return axios.post("api/v1/login", {
        email, password
    })
}

const getUserWithPaginate = (page, limit) => {
    console.log(page, limit)
    return axios.get(`api/v1/user/read?page=${page}&limit=${limit}`);
    // return axios.get("http://localhost:8080/api/v1/user/read?page=1&limit=5");

}

export {
    registerNewUser, loginUser, getUserWithPaginate
};