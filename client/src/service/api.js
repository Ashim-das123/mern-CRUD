import axios from 'axios';
//axios used for api calling

const URL = 'http://localhost:8000';
export const addUser = async (data) => {
    // error handling
    try {
        return await axios.post(`${URL}/add`, data);
    }
    catch (error) {
        console.log('Error while calling add User api', error);
    }
}

export const getUsers = async () => {

    try {
        return await axios.get(`${URL}/all`)
    }
    catch (error) {
        console.log('Error while calling getusers api', error)
    }
}
export const getUser = async (id) => {

    try {
        return await axios.get(`${URL}/${id}`);
    }
    catch (error) {
        console.log('Error while calling getUser api', error)
    }
}
export const editUser = async (user, id) => {

    try {
        return await axios.put(`${URL}/${id}`, user);
    }
    catch (error) {
        console.log('Error while calling editUser api', error)
    }
}
export const deleteUser = async (id) => {

    try {
        return await axios.delete(`${URL}/${id}`);
    }
    catch (error) {
        console.log('Error while calling deleteUser api', error)
    }
}