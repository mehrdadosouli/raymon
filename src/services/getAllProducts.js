import api from "../config/api";

const getAllProducts=()=> {
 return api.get("products")
    .then((res) => res)
    .catch((err) => err);
}
 
export { getAllProducts };
