import axios from "axios";
import { useState } from "react"

export const useUserReviews = () => {
    const [userReviews, setUserReviews] = useState();
    const fetchUserReview = async(payload:any) => {
        const { filmId } = payload
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1&api_key=9ace6723368dd9ec426287eee17509e3`)
            console.log(response)
        }
        catch(error){
            console.log(error);
            
        }
    }
    return {userReviews, fetchUserReview};
    
}