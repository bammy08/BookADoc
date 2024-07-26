import { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Divider, Box } from '@chakra-ui/react';

const DateSlider = () => {
  const [startDate, setStartDate] = useState(new Date());
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  const handlePrevClick = () => {
    setStartDate(subDays(startDate, 1));
  };

  const handleNextClick = () => {
    setStartDate(addDays(startDate, 1));
  };

  return (
    <Box className="w-full py-4">
      <Box className="flex items-center justify-between w-full">
        <Box
          as="button"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={handlePrevClick}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Box>
        <Box className="flex flex-1 overflow-x-auto">
          <Box className="flex items-center space-x-4">
            {days.map((day, index) => (
              <Box
                key={index}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  index === 5
                    ? 'bg-gray-100 text-gray-400'
                    : 'bg-white shadow-md'
                }`}
                position="relative"
                minWidth="80px" // Ensures each button has a minimum width
              >
                <span className="text-sm font-medium">
                  {format(day, 'EEE').toUpperCase()}
                </span>
                <span className="text-lg font-semibold">
                  {format(day, 'd')}
                </span>
                {index < days.length - 1 && (
                  <Divider
                    orientation="vertical"
                    height="54px"
                    position="absolute"
                    right="-10px"
                    top="0"
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          as="button"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={handleNextClick}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default DateSlider;
