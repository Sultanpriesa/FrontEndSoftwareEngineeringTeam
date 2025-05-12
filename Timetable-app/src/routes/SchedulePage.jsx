import React from 'react';
import ScheduleGrid from '../components/ScheduleGrid';

const sampleEvents = {
  Monday: [{ id:1, title:'English 101 course', location:'', startHour:8,endHour:9 }],
  Tuesday: [{ id:2, title:'Study of Human Biology', location:'', startHour:14,endHour:15 }],
  Wednesday: [{ id:3, title:'Paper review session', location:'', startHour:9,endHour:10 }],
  Thursday: [{ id:4, title:'Room 300 class details', location:'', startHour:11,endHour:12 }],
  Friday: [{ id:5, title:'Understanding the World Economy', location:'', startHour:11,endHour:12 }],
};

export default function SchedulePage() {
  return (
    <div className="p-6">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Schedule</h1>
          <div className="font-semibold text-lg">Your College Schedule</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center text-sm"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Schedule from May 01 to May 21, 2023.</span>
        </div>
      </div>
      <div className="bg-green-100 rounded p-2">
        <ScheduleGrid events={sampleEvents} />
      </div>
    </div>
  );
}