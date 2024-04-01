import axios from "axios";
import { useState } from "react"

export const useSimilarFilms = () => {
    const [similarFilms, setSimilarFilms] = useState([]);
    
    const fetchSimilarFilms = async(payload:any) => {
        const {filmId} = payload
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/similar?language=en-US&page=1&api_key=9ace6723368dd9ec426287eee17509e3`);
            setSimilarFilms(response.data.results.slice(0, 5))
            console.log(response);
            
          }
          catch (error) {
            console.log('similar movies error', error);
          }
    }
    return {similarFilms, fetchSimilarFilms}
}
