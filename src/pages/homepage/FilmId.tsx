import { StarIcon } from "@chakra-ui/icons";
import { VStack, Text, HStack, Image, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FilmId = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState<any>([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${filmId}?language=en-US&api_key=9ace6723368dd9ec426287eee17509e3`
        );
        console.log(response);
        setFilmData(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilmData();
  }, [filmId]);
  return (
    <VStack
      justifyContent="center"
      height="100vh"
      width="100%"
      bgImg={`https://image.tmdb.org/t/p/w500${filmData?.backdrop_path}`}
      bgRepeat="no-repeat"
      bgSize="100% 70%"
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
                <StarIcon color={'yellow'}/>
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
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default FilmId;
