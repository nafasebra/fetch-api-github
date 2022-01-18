import axios from "axios";

const APILink = axios.create({
    baseURL: "https://api.github.com/"
})

// you can type your github username instead of 'nafasebra'
let username = "basemax"; 

export const getUserInfo = () => APILink.get(`/users/${username}`).then(res => res.data);

export const getStarsUser = () => APILink.get(`/users/${username}/starred`).then(res => res.data);

export const getRepoInfo = () => APILink.get(`/users/${username}/repos`).then(res => res.data);