import axios from "axios"

export const fetchShows = () => {
    return axios.get("http://api.tvmaze.com/shows")
}

export const searchShows = (query) => {
    return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
}

