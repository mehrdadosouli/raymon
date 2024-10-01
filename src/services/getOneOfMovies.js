import api from "../config/api"

const getOneOfMovies=(idMovie)=>{
   return api.get(`movies/${idMovie}`)
    .then((res) => res)
    .catch((err) => {
        throw new Error(err);
    });
}

export { getOneOfMovies }