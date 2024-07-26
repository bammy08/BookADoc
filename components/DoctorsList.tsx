// components/DoctorsList.tsx
import React from 'react';
import { VStack } from '@chakra-ui/react';
import DoctorCard from './DoctorCard';

const DoctorsList = () => {
  return (
    <VStack spacing="5">
      <DoctorCard
        buttonConfig="moreInfoAndBook"
        doctor={{
          name: 'Katherine Carroll, DO',
          specialty: 'Primary Care Doctor',
          rating: 5.0,
          images: [
            '/images/one.jpeg',
            '/images/two.jpeg',
            '/images/three.jpeg',
          ],
          address: 'Toney Neck Suite 296',
          favoriteIconBgColor: 'red.500',
          favoriteIconColor: 'white',
        }}
      />
      <DoctorCard
        buttonConfig="moreInfoAndBookAppointment"
        doctor={{
          name: 'James Thompson, MD',
          specialty: 'Cardiologist',
          rating: 3.0,
          images: [
            '/images/three.jpeg',
            '/images/two.jpeg',
            '/images/one.jpeg',
          ],
          address: 'Heart Center, Building B',
          favoriteIconBgColor: 'blue.500',
          favoriteIconColor: 'yellow',
        }}
        hasSeparator={true}
        showDateSlider={true}
      />
      <DoctorCard
        buttonConfig="moreInfoOnly"
        doctor={{
          name: 'Maria Lopez, PA',
          specialty: 'Pediatrician',
          rating: 4.0,
          images: [
            '/images/two.jpeg',
            '/images/one.jpeg',
            '/images/three.jpeg',
          ],
          address: 'Children’s Health Clinic',
          favoriteIconBgColor: 'green.500',
          favoriteIconColor: 'pink',
        }}
        hasSeparator={true}
        showTimeSlots={true}
      />
      <DoctorCard
        buttonConfig="moreInfoAndBookAppointment"
        doctor={{
          name: 'James Thompson, MD',
          specialty: 'Cardiologist',
          rating: 3.0,
          images: [
            '/images/one.jpeg',
            '/images/three.jpeg',
            '/images/two.jpeg',
          ],
          address: 'Heart Center, Building B',
          favoriteIconBgColor: 'blue.500',
          favoriteIconColor: 'yellow',
        }}
        hasSeparator={true}
        showDateSlider={true}
      />
    </VStack>
  );
};

export default DoctorsList;