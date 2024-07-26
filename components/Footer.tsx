'use client';

import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        align="center"
        mx="auto"
        maxW="6xl"
      >
        <VStack align="start" mb={isMobile ? 6 : 0}>
          <Text fontSize="2xl" fontWeight="bold">
            BookADoc
          </Text>
          <Text>
            BookADoc is a patient facing web / mobile <br />
            application where patients can search and discover providers <br />{' '}
            by illness, specialist or name of the provider.
          </Text>
        </VStack>

        <HStack spacing={10} mb={isMobile ? 6 : 0}>
          <VStack align="start">
            <Text>SERVICES FOR PATIENTS</Text>
            <Link>Doctor Search</Link>
            <Link>Appointment Booking</Link>
            <Link>Patient Reviews</Link>
          </VStack>
          <VStack align="start">
            <Text>SERVICES FOR DOCTORS</Text>
            <Link>Profile Listing</Link>
            <Link>Appointment Management</Link>
            <Link>Patient Feedback</Link>
          </VStack>
        </HStack>

        <VStack align="start">
          <Text>CONTACT US</Text>
          <Text>1-888-123-4567</Text>
          <Link href="mailto:help@bookadoc.com">help@bookadoc.com</Link>
        </VStack>
      </Flex>

      <Box
        borderTopWidth={1}
        borderColor="gray.700"
        mt={10}
        pt={5}
        textAlign="center"
      >
        <Text>
          BookADoc is a patient facing web / mobile application where patients
          can search and discover providers by illness, specialist or name of
          the provider. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sed neque vitae nisl condimentum feugiat vitae et libero.
          Phasellus volutpat sapien aliquam mauris volutpat imperdiet. Aenean eu
          elementum sem. Nullam convallis fermentum mauris, id luctus neque
          porta pulvinar.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
