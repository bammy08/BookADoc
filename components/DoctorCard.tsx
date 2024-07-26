// components/DoctorCard.tsx
import Image from 'next/image';
import {
  Button,
  Box,
  Flex,
  VStack,
  Text,
  AvatarGroup,
  Avatar,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { IoLocationOutline, IoHeart } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../app/styles/slick-custom.css'; // Import the custom CSS
import DateSlider from './DateSlider';
import TimeSlotPicker from './TimeSlotPicker';
import MoreInfoButton from './MoreInfoButton';
import BookAppointmentButton from './BookAppointmentButton';

type DoctorProps = {
  doctor: {
    name: string;
    specialty: string;
    rating: number;
    images?: string[];
    address: string;
    favoriteIconBgColor: string;
    favoriteIconColor: string;
  };
  hasSeparator?: boolean;
  showDateSlider?: boolean;
  showTimeSlots?: boolean;
  buttonConfig:
    | 'moreInfoOnly'
    | 'moreInfoAndBook'
    | 'moreInfoAndBookAppointment';
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const DoctorCard = ({
  doctor,
  hasSeparator = false,
  showDateSlider = false,
  showTimeSlots = false,
  buttonConfig,
}: DoctorProps) => {
  const images = doctor.images || []; // Provide default value if images are undefined

  return (
    <Box
      bg="white"
      p={{ base: '2', md: '4' }}
      rounded="lg"
      shadow="md"
      position="relative"
      w="100%"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'center', md: 'start' }}
      >
        <Box
          position="relative"
          maxW="200px"
          w="100%"
          mb={{ base: '4', md: '0' }}
        >
          <Slider {...settings}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <Box key={index} position="relative" maxW="180px" maxH="180px">
                  <Image
                    src={image}
                    alt={`doctor-${index}`}
                    width={180}
                    height={180}
                    objectFit="cover"
                    layout="fixed"
                  />
                </Box>
              ))
            ) : (
              <Text>No images available</Text>
            )}
          </Slider>
          <Box position="absolute" top="2" left="2">
            <IconButton
              aria-label="favorite"
              icon={<IoHeart color={doctor.favoriteIconColor} />}
              bg={doctor.favoriteIconBgColor}
              color={doctor.favoriteIconColor}
              _hover={{ bg: doctor.favoriteIconBgColor }}
              rounded="full"
            />
          </Box>
        </Box>
        <Flex
          flex="1"
          ml={{ base: '0', md: '4' }}
          justify="space-between"
          align={{ base: 'center', md: 'start' }}
          direction={{ base: 'column', md: 'row' }}
          w="100%"
        >
          <VStack
            align="start"
            spacing={{ base: '2', md: '4' }}
            mb={{ base: '4', md: '0' }}
          >
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
              {doctor.name}
            </Text>
            <Text color="gray.500">{doctor.specialty}</Text>
            <Flex align="center" gap="1">
              <Text>
                <IoLocationOutline />
              </Text>
              <span>{doctor.address}</span>
            </Flex>
            <Flex align="center" gap="2">
              <Flex align="center" bgColor="red.100" px={3} borderRadius={10}>
                <Text
                  color="red.500"
                  fontSize={{ base: 'md', md: 'lg' }}
                  mr="3"
                >
                  ★
                </Text>
                <Text color={'red.500'}>{doctor.rating}.00</Text>
              </Flex>
              <Text>
                (<span className="underline">99 reviews</span>)
              </Text>
            </Flex>
            <Flex align="center" gap="2">
              <AvatarGroup size="sm" max={3}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              </AvatarGroup>
              <span>Dyson, 2+ more insurance accepted</span>
            </Flex>
          </VStack>
          <Flex>
            <Flex gap={4}>
              {buttonConfig === 'moreInfoOnly' && <MoreInfoButton />}
              {buttonConfig === 'moreInfoAndBook' && (
                <>
                  <MoreInfoButton />
                  <Button className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm">
                    Book Again
                  </Button>
                </>
              )}
              {buttonConfig === 'moreInfoAndBookAppointment' && (
                <>
                  <MoreInfoButton />
                  <BookAppointmentButton />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {hasSeparator && (
        <>
          <Divider my={{ base: '4', md: '6' }} />
          {showDateSlider && <DateSlider />}
          {showTimeSlots && <TimeSlotPicker />}
        </>
      )}
    </Box>
  );
};

export default DoctorCard;
