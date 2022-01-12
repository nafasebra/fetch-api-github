import axios from "axios";

const APILink = axios.create({
    baseURL: "https://api.github.com/"
})

export const getUserInfo = () => APILink.get("/users/nafasebra").then(res => res.data);


export const getStarsUser = () => APILink.get("/users/nafasebra/starred").then(res => res.data);


export const getRepoInfo = ({ pageParam = 0 }) => {
    APILink.get(`/users/nafasebra/repos?page=${pageParam}`)
            .then(res => res.data);
}