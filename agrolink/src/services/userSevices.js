import axios  from "axios";

const baseUrl = "http://localhost:3001/users";

const login = (username, password) => {
    return  axios.post(`${baseUrl}/login`, { username, password });
    
    }

    const register = (credential) => {
        return  axios.post(`${baseUrl}/`, credential);
    }

const getoneuser = (id) => {
    return  axios.get(`${baseUrl}/${id}`);
}

const updateuser = (id, credential) => {
    return  axios.put(`${baseUrl}/${id}`, credential);
}
const getalluser = () => {
    return  axios.get(`${baseUrl}`);
}

const deleteuser = (id) => {
    return  axios.delete(`${baseUrl}/${id}`);
}



export default { login, register,getoneuser,updateuser,getalluser ,deleteuser};