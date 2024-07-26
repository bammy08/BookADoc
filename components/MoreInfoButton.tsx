// components/MoreInfoButton.tsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const MoreInfoButton: React.FC = () => (
  <Button
    className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm"
    leftIcon={<InfoIcon />}
    variant="outline"
  >
    More Info
  </Button>
);

export default MoreInfoButton;
