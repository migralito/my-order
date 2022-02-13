import axios from 'axios';
const baseUrlCategories = 'http://localhost:3001/categories'
const baseUrlProducts = 'http://localhost:3001/products'

const getAllCategories = async () => {
    try {
        const response = await axios.get(baseUrlCategories);
        return response.data;
    } catch (err) {
        return alert(err);
    }
}

const getAllProducts = async () => {
    try {
        const response = await axios.get(baseUrlProducts);
        return response.data;
    } catch (err) {
        return alert(err);
    }
}


export { getAllCategories, getAllProducts }