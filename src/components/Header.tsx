import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
const Header = () => {
  return (
    <HStack bg={'black'} color={'white'} padding="10px 30px" justifyContent={'space-between'} width="100%">
        <Text fontSize="20px" fontStyle="italic" fontWeight={600} letterSpacing={2} cursor="pointer" width="10%">TRNCinebeam</Text>
        <HStack justifyContent="space-between" width="25%">
            <Text>Drama</Text>
            <Text>Romantic</Text>
            <Text>Action</Text>
            <Text>Fear</Text>
        </HStack>
        <InputGroup width="20%" height="30px">
            <InputLeftElement padding="5px">
                <SearchIcon color={'black'}/>
            </InputLeftElement>
            <Input width="100%" padding="0 25px" fontSize="16px" outline="none"/>
        </InputGroup>
    </HStack>
  )
}

export default Header