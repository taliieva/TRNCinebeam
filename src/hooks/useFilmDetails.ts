import axios from "axios";
import { useState } from "react"
type TFilmDetails = {
  backdrop_path: string,
  original_title:string,
  vote_average:number,
  popularity:number ,
  poster_path:string,
  overview:string,
  release_date: string,
  genres:[]
}
export const useFilmDetails = () => {

  const [details, setDetails] = useState<TFilmDetails>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchFilmDetails = async (payload: any) => {
    const { filmId } = payload;
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?language=en-US&api_key=9ace6723368dd9ec426287eee17509e3`
      );
      setDetails(response.data)
      console.log(response);

    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }
  return { details, fetchFilmDetails, isLoading };
}