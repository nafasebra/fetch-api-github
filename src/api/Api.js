import axios from "axios";

const APILink = axios.create({
    baseURL: "https://api.github.com/"
})

// you can type your github username instead of 'nafasebra'
let username = "nafasebra";


export const getUserInfo = () => APILink.get(`/users/${username}`).then(res => res.data).catch(err => console.log(err));

export const getStarsUser = () => APILink.get(`/users/${username}/starred`).then(res => res.data).catch(err => console.log(err));

export const getRepoInfo = async({ queryKey }) => {
    const [_, pageNumber] = queryKey;
    const data = await APILink.get(`/users/${username}/repos?page=${pageNumber}&per_page=10`);
    console.log(pageNumber)
    return data.data
}