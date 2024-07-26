'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Box, Button, Flex } from '@chakra-ui/react';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    services: false,
    doctors: false,
  });

  const toggleDropdown = (key: string) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="nav"
      bgGradient="linear(to-r, orange.100, purple.100)"
      boxShadow="md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">BookADoc</div>
        <div className="hidden md:flex space-x-6 items-center">
          <div
            className="relative flex items-center cursor-pointer hover:text-gray-700"
            onClick={() => toggleDropdown('services')}
          >
            <Link href="/services">Services</Link>
            <FaChevronDown
              className={`ml-2 ${
                dropdownOpen.services ? 'transform rotate-180' : ''
              } transition-transform`}
              size={16}
            />
            {dropdownOpen.services && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-lg py-2">
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative flex items-center cursor-pointer hover:text-gray-700"
            onClick={() => toggleDropdown('doctors')}
          >
            <Link href="/doctors">Doctors</Link>
            <FaChevronDown
              className={`ml-2 ${
                dropdownOpen.doctors ? 'transform rotate-180' : ''
              } transition-transform`}
              size={16}
            />
            {dropdownOpen.doctors && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-lg py-2">
                <Link
                  href="/doctors/doctor1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Doctor 1
                </Link>
                <Link
                  href="/doctors/doctor2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Doctor 2
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-gray-700">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-gray-700">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-700">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/signin">
            <Button
              colorScheme="gray"
              bgColor="white"
              borderRadius={50}
              variant="solid"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              colorScheme="gray"
              bgColor="white"
              borderRadius={50}
              variant="solid"
            >
              Clinic Sign Up
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div
            className="relative flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => toggleDropdown('services')}
          >
            <Link href="/services">Services</Link>
            <FaChevronDown
              className={`ml-2 ${
                dropdownOpen.services ? 'transform rotate-180' : ''
              } transition-transform`}
              size={16}
            />
            {dropdownOpen.services && (
              <div className="mt-2 w-full bg-white shadow-md rounded-lg py-2">
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => toggleDropdown('doctors')}
          >
            <Link href="/doctors">Doctors</Link>
            <FaChevronDown
              className={`ml-2 ${
                dropdownOpen.doctors ? 'transform rotate-180' : ''
              } transition-transform`}
              size={16}
            />
            {dropdownOpen.doctors && (
              <div className="mt-2 w-full bg-white shadow-md rounded-lg py-2">
                <Link
                  href="/doctors/doctor1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Doctor 1
                </Link>
                <Link
                  href="/doctors/doctor2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Doctor 2
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
            Blog
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact Us
          </Link>
          <Link href="/signin" className="block px-6 py-2">
            <Button
              colorScheme="gray"
              bgColor="gray.100"
              borderRadius={50}
              variant="solid"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup" className="block px-6 py-2">
            <Button
              colorScheme="gray"
              bgColor="gray.100"
              borderRadius={50}
              variant="solid"
            >
              Clinic Sign Up
            </Button>
          </Link>
        </div>
      )}
      <Box p={0}>
        <Flex alignItems="center" justifyContent="center">
          <div className=" md:w-[80%] mt-10 mb-5">
            <SearchBar />
          </div>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
