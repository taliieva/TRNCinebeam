import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard.tsx";
import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardContainer = ({ searchValue }) => {
  const [movies, setMovies] = useState<any[]>([]);

  const fetchCardResponse = async () => {
    try {
      let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ace6723368dd9ec426287eee17509e3";
      const response = await axios.get(url);
      console.log(response);

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchCardResponse();
  },[]);

  const filteredMovies = movies.filter(movie =>
    movie.original_title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")
  );

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap="30px 5px"
      padding={30}
      justifyContent="center"
      alignItems="center"
    >
      {filteredMovies?.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: "none" }}>
          <FilmCard
            key={movie.id}
            title={movie.original_title}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            imdb={movie.vote_average}
            language={movie.original_language}
          />
        </Link>
      ))}
    </Grid>
  );
};

export default CardContainer;
