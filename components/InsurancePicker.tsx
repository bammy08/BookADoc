// components/InsurancePicker.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MdOutlineShield } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const InsurancePicker: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    'Agile Health Insurance'
  );

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<MdOutlineShield color="gray" />}
        rightIcon={<IoMdArrowDropdown size={20} />}
        bgColor={'white'}
      >
        {selectedOption}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleOptionSelect('Agile Health Insurance')}>
          Agile Health Insurance
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionSelect('Homeville Health Insurance')}
        >
          Homeville Health Insurance
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default InsurancePicker;
