// components/BookAppointmentButton.tsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

const BookAppointmentButton: React.FC = () => (
  <Button
    className="flex items-center px-4 py-2 bg-black text-white rounded-full shadow-sm"
    leftIcon={<CalendarIcon />}
  >
    Book Appointment
  </Button>
);

export default BookAppointmentButton;
