import React, { useContext } from "react";

import axios from "axios";

const APILink = axios.create({
    baseURL: "https://api.github.com/"
})

// you can type your github username instead of 'nafasebra'
export let username = "basemax";


export const getUserInfo = () => APILink.get(`/users/${username}`).then(res => res.data);

export const getStarsUser = () => APILink.get(`/users/${username}/starred`).then(res => res.data);

export const getRepoInfo = async({ queryKey }) => {
    const [_, pageNumber] = queryKey;
    const data = await APILink.get(`/users/${username}/repos?page=${pageNumber}`);
    return data.data
}