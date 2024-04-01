import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard.tsx";
import { Grid, HStack, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const CardContainer = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [originalMovies, setOriginalMovies] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [openMenu, setOpenMenu] = useState(false);


  const showCategories = () => {
    setOpenMenu(!openMenu)
  }
  const fetchCardResponse = async () => {
    try {
      let url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9ace6723368dd9ec426287eee17509e3";
      const response = await axios.get(url);
      setOriginalMovies(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const filteredMovies = originalMovies.filter(movie =>
        movie.original_title.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("enter clicked");
      setMovies(filteredMovies);
    }
  };

  useEffect(() => {
    fetchCardResponse();
  }, []);

  const getMoviesByGenre = (genreId: number, moviesToFilter: Array<any>) => {
    return moviesToFilter.filter(movie => movie.genre_ids.includes(genreId));
  };

  const handleClick = (genreId: number) => {
    const moviesByGenre = getMoviesByGenre(genreId, originalMovies);
    console.log(`Movies with genre id ${genreId}:`, moviesByGenre);
    setMovies(moviesByGenre);
  };
  // const filteredMovies = movies.filter(movie =>
  //   movie.original_title.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : "")
  // );

  return (
    <VStack padding={30} alignItems={"flex-start"} width="100%">
      <HStack justifyContent={"space-between"} alignItems="center" width="100%">
        <HStack borderRadius="5px" alignItems="flex-start" ml="50px">
          <Text id="28" onClick={() => handleClick(28)} cursor={"pointer"} bg="pink" p={5} borderRadius={5}> Action</Text>
          <Text id="16" onClick={() => handleClick(16)} cursor={"pointer"} bg="pink" p={5} borderRadius={5}>Animation</Text>
          <Text id="35" onClick={() => handleClick(35)} cursor={"pointer"} bg="pink" p={5} borderRadius={5}>Comedy</Text>
          <Text id="10749" onClick={() => handleClick(10749)} cursor={"pointer"} bg="pink" p={5} borderRadius={5}>Romance</Text>
          <Text id="12" onClick={() => handleClick(12)} cursor={"pointer"} bg="pink" p={5} borderRadius={5}>Adventure</Text>
        </HStack>
        <InputGroup height="30px" w="500px" mr="50px">
          <InputLeftElement p="6px">
            <SearchIcon />
          </InputLeftElement>
          <Input
            value={searchValue}
            onChange={handleSearchInput}
            onKeyDown={handleEnterKeyPress}
            width="100%"
            padding="5px 30px"
            fontSize="16px"
            outline="none"
            placeholder="Search..."
            borderRadius={5}
            border="1px solid black"
          />
        </InputGroup>
      </HStack>
      <Grid
        padding="0 50px"
        templateColumns="repeat(6, 1fr)"
        gap="30px 5px"
        alignItems={"center"}
      >
        {movies?.map((movie) => (
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
