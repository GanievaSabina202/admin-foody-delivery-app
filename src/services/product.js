import axios from 'axios';

export const getProductDataUrl = async () => {
    const productUrl = await axios.get("https://jsonplaceholder.typicode.com/albums")
    return productUrl.data
}

export const RemoveProductItem = async (id) => {
    const removeItem = await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    return removeItem
}
