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
interface IHeaderProps{
  onSearch:(query:string)=> void
}
const Header:React.FC<IHeaderProps> = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
