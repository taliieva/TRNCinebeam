import { ArrowLeftIcon, StarIcon } from "@chakra-ui/icons";
import { VStack, Text, HStack, Image, Heading, Grid, Box, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import useTrailerVideos from "../../../hooks/useTrailerVideos.ts";
import { useFilmDetails } from "../../../hooks/useFilmDetails.ts";
import { useSimilarFilms } from "../../../hooks/useSimilarFilms.ts";
import { useUserReviews } from "../../../hooks/useUserReviews.ts";

const FilmId = () => {
  const { filmId } = useParams();

  const { videos, fetchTrailerVidoes, isLoading } = useTrailerVideos();
  const { details, fetchFilmDetails } = useFilmDetails();
  const { similarFilms, fetchSimilarFilms } = useSimilarFilms()
  const { userReviews, fetchUserReview } = useUserReviews()


  useEffect(() => {
    fetchFilmDetails({ filmId });
    fetchUserReview({ filmId });
    fetchSimilarFilms({ filmId });
    fetchTrailerVidoes({ filmId });
  }, [filmId]);


  return (
    // <VStack
    //   padding="30px 0"
    //   height="100vh"
    //   width="100%"
    //   bgImg={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`}
    //   bgRepeat="no-repeat"
    //   bgSize="cover"
    //   gap={20}
    // >

    //   <VStack width="80%" align="flex-start" gap={20}>
    //     <Text
    //       width="100%"
    //       bg={"gray"}
    //       padding="15px 20px"
    //       fontStyle="italic"
    //       fontWeight={600}
    //       borderRadius={10}
    //       fontSize="20px"
    //     >
    //       <Link to="/" style={{ textDecoration: "none", color: "black" }}>
    //         TRNCinebeam
    //       </Link>
    //     </Text>
    //     <HStack
    //       width="100%"
    //       bg={"gray"}
    //       padding="15px 20px"
    //       borderRadius={10}
    //       justifyContent="space-between"
    //       alignItems="flex-start"
    //     >
    //       <Text fontSize="26px" fontWeight={600} letterSpacing={2} color="white">{details?.original_title}</Text>
    //       <HStack gap={20}>
    //         <VStack>
    //           <Text>Rating:</Text>
    //           <HStack>
    //             <StarIcon color={'yellow'} />
    //             <Text>{details && details.vote_average ? details.vote_average.toFixed(1) : 'N/A'}</Text>
    //           </HStack>
    //         </VStack>
    //         <VStack>
    //           <Text>Popularity:</Text>
    //           <HStack>
    //             <Text>{Math.round(details?.popularity ?? 0)}
    //             </Text>
    //           </HStack>
    //         </VStack>
    //       </HStack>
    //     </HStack>

    //     <HStack alignItems="flex-start">
    //       <Image
    //         src={`https://image.tmdb.org/t/p/w200${details?.poster_path}`}
    //       />
    //       <VStack
    //         width="100%"
    //         bg={"gray"}
    //         padding="15px 20px"
    //         borderRadius={10}
    //         fontSize="16px"
    //         height="100%"
    //         alignItems="flex-start"
    //       >
    //         <Heading>Overview</Heading>
    //         <Text width="50%" textAlign="justify">
    //           {details?.overview}
    //         </Text>
    //         <Text fontWeight={600}>Release date:</Text>
    //         <Text>{details?.release_date}</Text>
    //         <Text fontWeight={600}>Category:</Text>
    //         <HStack>
    //           {details?.genres?.map((genre: any) => (

    //             <Text key={genre.id}>{genre.name}</Text>
    //           ))}
    //         </HStack>
    //       </VStack>
    //     </HStack>


    //   </VStack>


    //   <HStack width="80%" align="flex-start" gap={20} flexWrap="wrap">
    //     {videos?.map((video: any) => (
    //       <div key={video.id} className="react-player" style={{ width: "100%", height: "100vh" }}>
    //         <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} controls={true} width="100%" height="100%" />
    //       </div>
    //     ))}
    //   </HStack>


    //   <VStack bg="gray" width="80%" borderRadius={10} padding="15px 20px" alignItems="flex-start">
    //     <Heading >Similar Movies</Heading>
    //     <Grid

    //       templateColumns="repeat(5, 1fr)"
    //       gap="20px"
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //       {similarFilms?.map((film: any) => (
    //         <Link to={`/movie/${film.id}`} key={film.id} style={{ textDecoration: "none" }}>
    //           <VStack
    //             padding={10}
    //             key={film.id}
    //             alignItems="flex-start"
    //             height="370px"
    //             bg="black"
    //             color={'white'}>
    //             <Image src={`https://image.tmdb.org/t/p/w200${film?.poster_path}`} />
    //             <Text fontSize="16px">{film.title}</Text>
    //           </VStack>
    //         </Link>
    //       ))}
    //     </Grid>
    //   </VStack>

    // </VStack>
    <Box width="100%" bg="rgba(0,0,0,0.8)" height="100vh" padding="50px 100px">
      <HStack alignItems={"center"}>
        <VStack padding={20} gap={30} color="white" bgImg={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`} bgSize="cover" bgRepeat="no-repeat" width="60vw" height="85vh" alignItems={"flex-start"}>
          <VStack height="100%" justifyContent={"space-between"} alignItems="flex-start">
            <HStack>
              <Link to="/" style={{ color: "white" }}> <ArrowLeftIcon /></Link>
              <Text>Back to home</Text>
            </HStack>
            <VStack alignItems="flex-start">
              <Heading fontSize={30}>{details?.original_title}</Heading>
              <HStack fontSize={18}>
                <StarIcon color={'yellow'} />
                <Text>{details && details.vote_average ? details.vote_average.toFixed(1) : 'N/A'}/10</Text>
                <span>|</span>
                <Text>{Math.round(details?.popularity ?? 0)}</Text>
                <span>|</span>
                <Text>{details?.release_date}</Text>
                <span>|</span>
                {details?.genres.map((genre: any) => (
                  <Text key={genre.id}>{genre?.name}</Text>
                ))}
              </HStack>
              <Text width="70%" fontSize={16}>{details?.overview}</Text>
              {videos.length > 0 && (
                <VStack alignItems="flex-start">
                  <Text>Trailers:</Text>
                  <HStack>
                    {videos?.map((video: any, index) => (
                      <div key={video.id} className="react-player" style={{ padding: "5px 5px 20px 5px", backgroundColor: "white", borderRadius: "10px" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} controls={true} width="100%" height="100%" />
                        <Text color="black" fontSize="16px">Trailer {index + 1}</Text>
                      </div>
                    ))}
                  </HStack>
                </VStack>
              )}

            </VStack>
          </VStack>
        </VStack>

        <Box bg={"#908F8F"} w="20vw" p={15} height="85vh">
          <VStack bg="#DCDCDC" borderRadius={5}>
            <Text color="black" mt={10} textAlign="start" w="100%" pl={20}>Similar films:</Text>
            <VStack alignItems="flex-start" p={20}>
              {similarFilms?.map((film: any) => (
                <Link to={`/movie/${film.id}`} key={film.id} style={{ textDecoration: "none" }}>
                  <HStack alignItems="center" cursor="pointer">
                    <Image src={`https://image.tmdb.org/t/p/w200${film?.poster_path}`} height="90px" />
                    <VStack>
                      <Text fontSize="15px" color="black">{film.title}</Text>
                      <HStack alignItems="flex-start" width="100%" fontSize="14px">
                        <StarIcon color="yellow" />
                        <Text color="black">{film?.vote_average}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </Link>
              ))}
            </VStack>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default FilmId;
