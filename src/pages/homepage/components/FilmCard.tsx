import { Card, CardBody, CardHeader,HStack,Image, Text } from '@chakra-ui/react'
import React from 'react'

const FilmCard = ({title, image, imdb, language}) => {
  return (
    <Card width="220px" bg="gray" padding={10} borderRadius={10}>
    <CardHeader color="black" fontWeight={600} fontSize={20} mb="5px">{title}</CardHeader>
    <CardBody>
      <Image src={image} alt={title}/>
      <HStack justifyContent="space-between">
      <Text color="black">IMDB: {imdb.toFixed(1)}</Text>
      <Text color="black" textTransform={'uppercase'}>{language}</Text>
      </HStack>
    </CardBody>
  </Card>
  )
}

export default FilmCard
