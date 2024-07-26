// components/LocationPicker.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MdMyLocation } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const LocationPicker: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('40456');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<MdMyLocation color="gray" />}
        rightIcon={<IoMdArrowDropdown size={20} />}
        bgColor={'white'}
      >
        {selectedOption}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleOptionSelect('40456')}>40456</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('50986')}>50986</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LocationPicker;
