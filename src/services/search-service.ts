import { baseURLAxios as service } from "./base-services";
const key = process.env.REACT_APP_API_KEY;

export const searchMovie = async (data: String | null) => {
  const searchUrl = `/?t=${data}&apikey=${key}`;
  return service
    .get(searchUrl)
    .then((res) => res)
    .catch((err) => err);
};
