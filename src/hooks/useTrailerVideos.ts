import axios from "axios";
import { useState } from "react"

const useTrailerVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrailerVidoes = async (payload: any) => {
    try {
      setIsLoading(true);
      const { filmId } = payload;
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?language=en-US&api_key=9ace6723368dd9ec426287eee17509e3`);
      setVideos(response.data.results.slice(0, 1));
    }
    catch (error) {
      console.log('video error', error);
    } finally {
      setIsLoading(false);
    }
  }

  return { videos, fetchTrailerVidoes, isLoading };
}

export default useTrailerVideos;