import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard.tsx";
import { Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CardContainerProps {
    searchQuery: string;
  }
const CardContainer: React.FC<CardContainerProps> = ({ searchQuery }) => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    const fetchCardResponse = async () => {
      try {
        let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e86f2bbf1c8ee2160e90df236faed478";
        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=e86f2bbf1c8ee2160e90df236faed478&query=${searchQuery}`;
        }
        
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCardResponse();
  }, [searchQuery]);

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap="30px 5px"
      padding={30}
      justifyContent="center"
      alignItems="center"
    >
      {movies.map((movie) => (
        <Link to={`/film/${movie.original_title}`} style={{textDecoration:"none"}}>
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
