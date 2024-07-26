import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

const SearchBar: React.FC = () => {
  return (
    <Box
      className="w-[100%] md:w-[100%] md:mx-auto"
      p={2}
      bg={{ base: 'transparent', md: 'white' }}
      boxShadow={{ base: 'none', md: 'md' }}
      rounded={{ base: 'none', md: 'full' }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <InputGroup
          className="w-full md:w-[35%]"
          mb={{ base: 2, md: 0 }}
          mr={{ base: 0, md: 2 }}
        >
          <InputLeftElement pointerEvents="none" color="gray.300">
            <FaSearch />
          </InputLeftElement>
          <Input
            placeholder="Migraine"
            focusBorderColor="blue.500"
            borderColor={{ base: 'gray.300', md: 'transparent' }}
          />
        </InputGroup>
        <Divider
          orientation="vertical"
          height={{ base: 0, md: '40px' }}
          width={{ base: '100%', md: 'auto' }}
          my={{ base: 2, md: 0 }}
        />
        <InputGroup
          className="w-full md:w-[25%]"
          mb={{ base: 2, md: 0 }}
          mr={{ base: 0, md: 2 }}
        >
          <InputLeftElement pointerEvents="none" color="gray.300">
            <FaMapMarkerAlt />
          </InputLeftElement>
          <Input
            placeholder="40361"
            focusBorderColor="blue.500"
            borderColor={{ base: 'gray.300', md: 'transparent' }}
          />
        </InputGroup>
        <Divider
          orientation="vertical"
          height={{ base: 0, md: '40px' }}
          width={{ base: '100%', md: 'auto' }}
          my={{ base: 2, md: 0 }}
        />
        <InputGroup className="w-full md:w-[30%]" mb={{ base: 2, md: 0 }}>
          <InputLeftElement pointerEvents="none" color="gray.500">
            <FiShield />
          </InputLeftElement>
          <Select
            className="ml-3"
            placeholder="Agile Health Insurance"
            focusBorderColor="blue.500"
            borderColor={{ base: 'gray.300', md: 'transparent' }}
          >
            {/* Options */}
          </Select>
        </InputGroup>
        <Button
          colorScheme="pink"
          rounded="full"
          px={10}
          mt={{ base: 2, md: 0 }}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchBar;
