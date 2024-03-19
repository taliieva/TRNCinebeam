import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard.tsx";
import { Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardContainer = ({ searchValue }) => {
  const [movies, setMovies] = useState<any[]>([]);

  const fetchCardResponse = async () => {
    try {
      let url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9ace6723368dd9ec426287eee17509e3";
      const response = await axios.get(url);
      console.log(response);

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchCardResponse();
  }, []);

  const getMoviesByGenre = (genreId: number) => {
    return movies.filter(movie => movie.genre_ids.includes(genreId));
  };
  const handleClick = (genreId: number) => {
    const moviesByGenre = getMoviesByGenre(genreId);
    console.log(`Movies with genre id ${genreId}:`, moviesByGenre);
  };
  const filteredMovies = movies.filter(movie =>
    movie.original_title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")
  );

  return (
    <VStack padding={30} alignItems={"flex-start"} width="100%">
      <HStack justifyContent="flex-start" width={"70%"} padding="0 50px">
        <Text id="28" onClick={()=>handleClick(28)} cursor={"pointer"}> Action</Text> 
        <Text id="16" onClick={()=>handleClick(16)} cursor={"pointer"}>Animation</Text>
        <Text id="35" onClick={()=>handleClick(35)} cursor={"pointer"}>Comedy</Text>
        <Text id="10749" onClick={()=>handleClick(10749)} cursor={"pointer"}>Romance</Text>
        <Text id="12" onClick={()=>handleClick(12)} cursor={"pointer"}>Adventure</Text>
      </HStack>
      <Grid
        padding="0 50px"
        templateColumns="repeat(6, 1fr)"
        gap="30px 5px"
        alignItems={"center"}
        
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
    </VStack>
  );
};

export default CardContainer;
