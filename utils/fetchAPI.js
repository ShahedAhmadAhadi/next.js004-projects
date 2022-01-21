import axios from "axios";

export const baseURL = 'https://' + process.env.API_HOST

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': process.env.API_HOST,
            'x-rapidapi-key': process.env.API_PASSWORD
        }
    })

    return data
}