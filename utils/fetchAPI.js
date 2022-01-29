export const baseURL = 'https://' + process.env.API_HOST;

export const fetchApi = async (url) => {
    // const { data } = 
    const data = await fetch(url, {
        headers: {
            'x-rapidapi-host': process.env.API_HOST,
            'x-rapidapi-key': process.env.API_PASSWORD,
        },
    }).then(res => res.json());
    return data;
};
