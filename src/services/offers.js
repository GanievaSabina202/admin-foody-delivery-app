import axios from 'axios';

export const getOffersDataUrl = async () => {
    const OffersUrl = await axios.get("https://jsonplaceholder.typicode.com/photos")
    return OffersUrl.data
}

export const RemoveOffersItem = async (id) => {
    const removeItem = await axios.delete(`https://jsonplaceholder.typicode.com/photos${id}`)
    return removeItem
}
