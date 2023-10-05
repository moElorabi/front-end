import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const baseURLPoster = process.env.REACT_APP_BASEURL_POSTER;

export const baseURLAxios = axios.create({
  baseURL: baseURL,
});

export const baseURLPosterAxios = axios.create({
  baseURL: baseURLPoster,
});
