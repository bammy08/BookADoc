// components/DatePickerButton.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@chakra-ui/react';
import { CiCalendar } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import { format } from 'date-fns';

const DatePickerButton: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const formattedDate = startDate
    ? format(startDate, 'd MMMM, yyyy')
    : 'Select Date';

  return (
    <Button
      leftIcon={<CiCalendar color="gray" />}
      rightIcon={<IoMdArrowDropdown size={20} />}
      bgColor={'white'}
      position="relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          dateFormat="d MMMM, yyyy"
          className="w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <span className="pl-2">{formattedDate}</span>
    </Button>
  );
};

export default DatePickerButton;
