import axios from 'axios';
const baseUrl = 'http://localhost:3001/menu'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (err) {
        return alert(err);
    }
}

export {getAll}