import axios from "./customizeApi";
// import axios from "axios";
const registerNewUser = (email, phone, username, password) => {
    return axios.post("api/v1/register", {
        email, phone, username, password
    })
}

const loginUser = (email, password) => {
    return axios.post("api/v1/login", {
        email, password
    })
}

const getAllUser = () => {
    return axios.get(`api/v1/user/read/all`);
}
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/user/read?page=${page}&limit=${limit}`);

}

const deleteTheUser = (userId) => {
    return axios.delete("api/v1/user/delete", {
        data: { id: userId }
    });
}

const createNewUser = (userData) => {
    return axios.post("api/v1/user/create", { ...userData })
}

const editAUser = (userData) => {
    return axios.post("api/v1/user/create", { ...userData })
}

const updateCurrentUser = (userData) => {
    return axios.put("api/v1/user/update", { ...userData })
}

export {
    registerNewUser, loginUser, getUserWithPaginate, deleteTheUser, createNewUser, getAllUser, editAUser, updateCurrentUser
};