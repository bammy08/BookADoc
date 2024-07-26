// components/PersonPicker.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsPersonSquare } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

const PersonPicker: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('In-person');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<BsPersonSquare color="gray" />}
        rightIcon={<IoMdArrowDropdown size={20} />}
        bgColor={'white'}
      >
        {selectedOption}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleOptionSelect('In-person')}>
          In-person
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect('Online')}>Online</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PersonPicker;
