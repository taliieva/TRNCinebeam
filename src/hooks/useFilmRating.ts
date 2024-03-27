import axios from "axios";

const useFilmRating = () => {
    const postFilmRating = async(payload) => {
        const {filmId} = payload
        try{
            const request = axios.post(`https://api.themoviedb.org/3/movie/${filmId}/rating&api_key=9ace6723368dd9ec426287eee17509e3`);
        }catch(error){
            console.log(error);
            
        }
    }
}