import { SearchIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
const Header = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${searchItem}`
      );
      setSearchResult(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
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
      <HStack justifyContent="space-between" width="25%">
        <Text>Drama</Text>
        <Text>Romantic</Text>
        <Text>Action</Text>
        <Text>Fear</Text>
      </HStack>
      <InputGroup width="20%" height="30px">
        <InputLeftElement padding="5px" onClick={handleSearch} cursor="pointer">
          <SearchIcon color={"black"} />
        </InputLeftElement>
        <Input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          width="100%"
          padding="0 25px"
          fontSize="16px"
          outline="none"
          placeholder="Search..."
          borderRadius={5}
          border="1px solid black"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </InputGroup>
    </HStack>
  );
};

export default Header;
