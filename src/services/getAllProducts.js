import api from "../config/api";

const getAllProducts=()=> {
 return api.get("movies")
    .then((res) => res)
    .catch((err) => err);
}
 
export { getAllProducts };
