import { Text, HStack, Link, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    const openMail = () =>{
        window.location.href = 'mailto:teranealieva01@gmail.com';
    }
  return (
        <VStack bg="black" color="white" padding="10px 30px" alignItems="flex-start">
            <Text onClick={openMail}>teranealieva01@gmail.com</Text>
            <Text>© 2024 TRNCinebeam. All rights reserved.</Text>
        </VStack>
    )
}

export default Footer