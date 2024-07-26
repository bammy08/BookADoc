'use client';

import Navbar from '../components/Navbar';

import Filter from '../components/Filter';
import { Button, SimpleGrid, Stack } from '@chakra-ui/react';

import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import DatePickerButton from '@/components/DatePicker';
import PersonPicker from '@/components/PersonPicker';
import LocationPicker from '@/components/LocationPicker';
import InsurancePicker from '@/components/InsurancePicker';
import { doctors } from '@/data';

import DoctorsList from '@/components/DoctorsList';

import Map from '@/components/Map';

export default function Home() {
  const firstTwoDoctors = doctors.slice(0, 2);

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-4">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-pink-500">Migraine</span> Illness with{' '}
            <span className="text-pink-500">Agile Health Insurance</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap space-y-2 md:space-y-0 md:space-x-2 w-full">
              <div className="w-full md:w-auto">
                <DatePickerButton />
              </div>
              <div className="w-full md:w-auto">
                <PersonPicker />
              </div>
              <div className="w-full md:w-auto">
                <InsurancePicker />
              </div>
              <div className="w-full md:w-auto">
                <LocationPicker />
              </div>
            </div>
            <div className="flex-shrink-0">
              <p className="underline cursor-pointer text-sm whitespace-nowrap">
                Clear all filter
              </p>
            </div>
          </div>

          <div className="mt-5">
            <span className=" font-semibold text-md mt-5">100+ Results</span>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mt-5">
            <SimpleGrid columns={1} spacing="5" p="4">
              <DoctorsList />
            </SimpleGrid>
            <div className="md:w-1/4">
              <div className="mb-5">
                <Map />
              </div>
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
