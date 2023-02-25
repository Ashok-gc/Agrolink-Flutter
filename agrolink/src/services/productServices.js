import axios from "axios";

const baseUrl = "http://localhost:3001/products";

function  getAll()   {
    return   axios.get(baseUrl);
   
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const update = (product_id, newObject) => {
    return axios.put(`${baseUrl}/${product_id}`, newObject);
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, update, remove };