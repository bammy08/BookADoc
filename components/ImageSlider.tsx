// components/ImageSlider.tsx
import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

type ImageSliderProps = {
  images: string[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  if (!Array.isArray(images) || images.length === 0) {
    return <Text>No images available</Text>;
  }

  return (
    <Box
      position="relative"
      width="150px"
      height="150px"
      overflow="hidden"
      flexShrink={0}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} width="100%" height="100%">
            <Image
              src={image}
              alt={`doctor-${index}`}
              layout="responsive"
              width={150}
              height={150}
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
