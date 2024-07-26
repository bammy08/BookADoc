'use client';

import { useState } from 'react';
import Select from 'react-select';
import {
  Radio,
  RadioGroup,
  Stack,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Button,
  Divider,
} from '@chakra-ui/react';

// Define custom styles for react-select
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'purple' : 'white',
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: 'purple',
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: 'white',
    ':hover': {
      backgroundColor: 'darkpurple',
      color: 'white',
    },
  }),
};

const Filter = () => {
  const [preferredTime, setPreferredTime] = useState<string>('Morning');
  const [providerGender, setProviderGender] = useState<string>('No Preference');
  const [visitReason, setVisitReason] = useState<string[]>([]);
  const [specialty, setSpecialty] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(4);
  const [languageSpoken, setLanguageSpoken] = useState<string[]>([]);

  const visitReasonOptions = [
    { value: 'Anxiety', label: 'Anxiety' },
    { value: 'Alcoholism', label: 'Alcoholism' },
    { value: 'Depression', label: 'Depression' },
    // Add more options as needed
  ];

  const specialtyOptions = [
    { value: 'Addicted', label: 'Addicted' },
    { value: 'Psychology', label: 'Psychology' },
    { value: 'Cardiology', label: 'Cardiology' },
    // Add more options as needed
  ];

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Deutsch', label: 'Deutsch' },
    { value: 'Spanish', label: 'Spanish' },
    // Add more options as needed
  ];

  return (
    <Box
      p={4}
      bg="white"
      rounded="lg"
      shadow="md"
      w={{ base: '100%', md: '80' }}
      maxW="sm"
      mx="auto"
    >
      <Text fontSize="lg" fontWeight="semibold" mb={4}>
        All Filter
      </Text>
      <Divider />
      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium" mt={5}>
          Preferred Time
        </Text>
        <RadioGroup value={preferredTime} onChange={setPreferredTime}>
          <Stack spacing={2} mt={2}>
            {['Early Morning', 'Morning', 'Afternoon', 'Evening'].map(
              (time) => (
                <Radio key={time} value={time} colorScheme="purple">
                  {time} (
                  {time === 'Early Morning'
                    ? 'Before 9am'
                    : time === 'Morning'
                    ? '9am - noon'
                    : time === 'Afternoon'
                    ? 'Noon - 4pm'
                    : 'After 4pm'}
                  )
                </Radio>
              )
            )}
          </Stack>
        </RadioGroup>
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium">
          Provider Gender
        </Text>
        <RadioGroup value={providerGender} onChange={setProviderGender}>
          <Stack spacing={2} mt={2}>
            {['No Preference', 'Male', 'Female'].map((gender) => (
              <Radio key={gender} value={gender} colorScheme="purple">
                {gender}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium">
          Visit Reason
        </Text>
        <Select
          isMulti
          options={visitReasonOptions}
          value={visitReasonOptions.filter((option) =>
            visitReason.includes(option.value)
          )}
          onChange={(selectedOptions) =>
            setVisitReason(selectedOptions.map((option) => option.value))
          }
          styles={customStyles}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium">
          Specialty
        </Text>
        <Select
          isMulti
          options={specialtyOptions}
          value={specialtyOptions.filter((option) =>
            specialty.includes(option.value)
          )}
          onChange={(selectedOptions) =>
            setSpecialty(selectedOptions.map((option) => option.value))
          }
          styles={customStyles}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium">
          Rating / Review
        </Text>
        <Box position="relative" display="flex" alignItems="center">
          <Button
            size="sm"
            colorScheme={rating === 1 ? 'purple' : 'gray'}
            variant="outline"
            mr={2}
          >
            1
          </Button>
          <Slider
            min={1}
            max={5}
            step={1}
            value={rating}
            onChange={(val) => setRating(val)}
            colorScheme="purple"
            aria-label="rating-slider"
            flex="1"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button
            size="sm"
            colorScheme={rating === 5 ? 'purple' : 'gray'}
            variant="outline"
            ml={2}
          >
            5
          </Button>
          <Button
            ml={4}
            size="sm"
            colorScheme="gray"
            color={'red.400'}
            variant="solid"
          >
            {rating}
          </Button>
        </Box>
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="medium">
          Language Spoken
        </Text>
        <Select
          isMulti
          options={languageOptions}
          value={languageOptions.filter((option) =>
            languageSpoken.includes(option.value)
          )}
          onChange={(selectedOptions) =>
            setLanguageSpoken(selectedOptions.map((option) => option.value))
          }
          styles={customStyles}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Box>
    </Box>
  );
};

export default Filter;
