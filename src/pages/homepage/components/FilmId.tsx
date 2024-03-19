import { StarIcon } from "@chakra-ui/icons";
import { VStack, Text, HStack, Image, Heading, Grid, Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { wrap } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const FilmId = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState<any>([]);
  const [similarFilms, setSimilarFilms] = useState<any>([]);
  const [video, setVideo] = useState<any>([]);

  const fetchFilmData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?language=en-US&api_key=9ace6723368dd9ec426287eee17509e3`
      );
      setFilmData(response.data)
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  };


  const fetchSimilarMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/similar?language=en-US&page=1&api_key=9ace6723368dd9ec426287eee17509e3`);
      setSimilarFilms(response.data.results.slice(0, 5))
    }
    catch (error) {
      console.log('similar movies error', error);
    }
  }

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?language=en-US&api_key=9ace6723368dd9ec426287eee17509e3`);
      setVideo(response.data.results.slice(0,1));
    }
    catch (error) {
      console.log('video error', error);

    }
  }

  useEffect(() => {
    fetchFilmData();
    fetchSimilarMovies();
    fetchVideos();
  }, [filmId]);


  return (
    <VStack
    padding="30px 0"
      height="100vh"
      width="100%"
      bgImg={`https://image.tmdb.org/t/p/w500${filmData?.backdrop_path}`}
      bgRepeat="no-repeat"
      bgSize="100% 75%"
      gap={20}
      >

      <VStack width="80%" align="flex-start" gap={20}>
        <Text
          width="100%"
          bg={"gray"}
          padding="15px 20px"
          fontStyle="italic"
          fontWeight={600}
          borderRadius={10}
          fontSize="20px"
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            TRNCinebeam
          </Link>
        </Text>
        <HStack
          width="100%"
          bg={"gray"}
          padding="15px 20px"
          borderRadius={10}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Text fontSize="26px" fontWeight={600} letterSpacing={2} color="white">{filmData?.original_title}</Text>
          <HStack gap={20}>
            <VStack>
              <Text>Rating:</Text>
              <HStack>
                <StarIcon color={'yellow'} />
                <Text>{filmData && filmData.vote_average ? filmData.vote_average.toFixed(1) : 'N/A'}</Text>
              </HStack>
            </VStack>
            <VStack>
              <Text>Popularity:</Text>
              <HStack>
                <Text>{Math.round(filmData?.popularity)}</Text>
              </HStack>
            </VStack>
          </HStack>
        </HStack>

        <HStack alignItems="flex-start">
          <Image
            src={`https://image.tmdb.org/t/p/w200${filmData?.poster_path}`}
          />
          <VStack
            width="100%"
            bg={"gray"}
            padding="15px 20px"
            borderRadius={10}
            fontSize="16px"
            height="100%"
            alignItems="flex-start"
          >
            <Heading>Overview</Heading>
            <Text width="50%" textAlign="justify">
              {filmData?.overview}
            </Text>
            <Text fontWeight={600}>Release date:</Text>
            <Text>{filmData?.release_date}</Text>
            <Text fontWeight={600}>Category:</Text>
            <HStack>
              {filmData?.genres?.map((genre: any) => (

                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </HStack>
          </VStack>
        </HStack>


      </VStack>


      <HStack width="80%" align="flex-start" gap={20} flexWrap="wrap">
        {video.map((video: any) => (
          <div key={video.id} className="react-player" style={{width:"100%", height:"100vh"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} controls={true} width="100%" height="100%" />
          </div>
        ))}
      </HStack>

      <VStack bg="gray" width="80%" borderRadius={10} padding="15px 20px" alignItems="flex-start">
        <Heading >Similar Movies</Heading>
        <Grid

          templateColumns="repeat(5, 1fr)"
          gap="20px"
          justifyContent="center"
          alignItems="center"
        >
          {similarFilms?.map((film: any) => (
            <Link to={`/movie/${film.id}`} key={film.id} style={{ textDecoration: "none" }}>
              <VStack
                padding={10}
                key={film.id}
                alignItems="flex-start"
                bg="black"
                color={'white'}>
                <Image src={`https://image.tmdb.org/t/p/w200${film?.poster_path}`} />
                <Text fontSize="16px">{film.title}</Text>
              </VStack>
            </Link>
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};

export default FilmId;
