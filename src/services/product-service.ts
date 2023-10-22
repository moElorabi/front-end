import { baseURLAxios as service } from "./base-services";

export const getProducts = async () => {
  const url = `/products`;
  return service
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};

export const getCategories = async () => {
  const url = `/products/categories`;
  return service
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};
