import { Card, CardBody, CardHeader, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FilmCard = ({ title, image, imdb, language }) => {
  return (
    <Card width="100%" bg="gray" height="390px" padding={10} borderRadius={10}>
      <Image src={image} alt={title} mb="10px"/>
      <CardBody>
        <VStack alignItems="flex-start" justifyContent="flex-end" h="100%">
          <Text color={'black'} fontWeight={600} fontSize={"18px"}>{title}</Text>
          <HStack justifyContent="space-between" w="100%">
            <Text color="black">IMDB: {imdb.toFixed(1)}</Text>
            <Text color="black" textTransform={'uppercase'}>{language}</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default FilmCard
