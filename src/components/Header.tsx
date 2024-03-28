import { SearchIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Header = () => {
   
  return (
    <HStack
      bg={"black"}
      color={"white"}
      padding="10px 30px"
      justifyContent={"space-between"}
      width="100%"
    >
      <Text
        fontSize="20px"
        fontStyle="italic"
        fontWeight={600}
        letterSpacing={2}
        cursor="pointer"
        width="10%"
      >
        TRNCinebeam
      </Text>
      {/* <InputGroup width="20%" height="30px">
        <InputLeftElement padding="5px" cursor="pointer">
          <SearchIcon color={"black"} />
        </InputLeftElement>
        <Input
          width="100%"
          padding="0 25px"
          fontSize="16px"
          outline="none"
          placeholder="Search..."
          borderRadius={5}
          border="1px solid black"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </InputGroup> */}
    </HStack>
  );
};

export default Header;
