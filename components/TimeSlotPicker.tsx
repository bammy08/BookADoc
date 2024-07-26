import React, { useState } from 'react';

interface Day {
  day: string;
  date: number;
  slots: { time: string; available: boolean }[];
}

const days: Day[] = [
  {
    day: 'MON',
    date: 8,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'TUE',
    date: 9,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: true },
      { time: '9:30 AM', available: true },
      { time: '10:15 AM', available: false },
      { time: '11:00 AM', available: true },
    ],
  },
  {
    day: 'WED',
    date: 10,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'THU',
    date: 11,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'FRI',
    date: 12,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'SAT',
    date: 13,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'SUN',
    date: 14,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'MON',
    date: 15,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'TUE',
    date: 16,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: false },
      { time: '9:30 AM', available: true },
      { time: '10:15 AM', available: true },
      { time: '11:00 AM', available: false },
    ],
  },
  {
    day: 'WED',
    date: 17,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'THU',
    date: 18,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'FRI',
    date: 19,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'SAT',
    date: 20,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'SUN',
    date: 21,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'MON',
    date: 22,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'TUE',
    date: 23,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '8:20 AM', available: true },
      { time: '9:00 AM', available: true },
      { time: '9:30 AM', available: true },
      { time: '10:15 AM', available: false },
      { time: '11:00 AM', available: true },
    ],
  },
  {
    day: 'WED',
    date: 24,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'THU',
    date: 25,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'FRI',
    date: 26,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'SAT',
    date: 27,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'SUN',
    date: 28,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '9:00 AM', available: false },
    ],
  },
  {
    day: 'MON',
    date: 29,
    slots: [
      { time: '8:00 AM', available: false },
      { time: '9:00 AM', available: true },
    ],
  },
  {
    day: 'TUE',
    date: 30,
    slots: [
      { time: '8:00 AM', available: true },
      { time: '8:20 AM', available: false },
      { time: '9:00 AM', available: true },
      { time: '9:30 AM', available: true },
      { time: '10:15 AM', available: false },
      { time: '11:00 AM', available: true },
    ],
  },
];

const TimeSlotPicker: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Day>(days[1]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleDayClick = (day: Day) => {
    setSelectedDay(day);
    setExpanded(false);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handlePrevClick = () => {
    setStartIndex(startIndex > 0 ? startIndex - 1 : startIndex);
  };

  const handleNextClick = () => {
    setStartIndex(
      startIndex < days.length - (window.innerWidth < 768 ? 3 : 7)
        ? startIndex + 1
        : startIndex
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="flex justify-between items-center">
        <button
          className={`text-xl ${
            startIndex > 0 ? 'text-gray-700' : 'text-gray-400'
          }`}
          onClick={handlePrevClick}
          disabled={startIndex === 0}
        >
          &lt;
        </button>
        <div className="flex space-x-2">
          {days
            .slice(startIndex, startIndex + (window.innerWidth < 768 ? 3 : 7))
            .map((day) => (
              <div key={day.date} className="flex flex-col items-center">
                <div
                  className={`p-2 rounded-lg ${
                    selectedDay.date === day.date
                      ? 'bg-purple-100'
                      : 'bg-gray-100'
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  <div className="text-center">{day.day}</div>
                  <div className="text-center">{day.date}</div>
                </div>
                {selectedDay.date === day.date && (
                  <div className="mt-4 flex flex-col items-center">
                    {day.slots
                      .slice(0, expanded ? day.slots.length : 3)
                      .map((slot, index) => (
                        <button
                          key={index}
                          className={`p-2 px-4 rounded-lg my-2 text-center ${
                            slot.available
                              ? 'bg-gray-200'
                              : 'bg-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!slot.available}
                        >
                          {slot.available ? slot.time : '-'}
                        </button>
                      ))}
                    {day.slots.length > 3 && (
                      <div className="text-center mt-2">
                        <button
                          className="text-blue-500 underline"
                          onClick={toggleExpanded}
                        >
                          {expanded ? 'See Less' : 'See More'}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <button
          className={`text-xl ${
            startIndex < days.length - (window.innerWidth < 768 ? 3 : 7)
              ? 'text-gray-700'
              : 'text-gray-400'
          }`}
          onClick={handleNextClick}
          disabled={
            startIndex >= days.length - (window.innerWidth < 768 ? 3 : 7)
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
