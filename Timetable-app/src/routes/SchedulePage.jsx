import React, { useState } from 'react';
import ScheduleGrid from '../components/ScheduleGrid';
import { useAuth } from '../context/AuthContext';

const sampleEvents = {
  Monday: [{ id:1, title:'English 101 course', location:'', startHour:8,endHour:9 }],
  Tuesday: [{ id:2, title:'Study of Human Biology', location:'', startHour:14,endHour:15 }],
  Wednesday: [{ id:3, title:'Paper review session', location:'', startHour:9,endHour:10 }],
  Thursday: [{ id:4, title:'Room 300 class details', location:'', startHour:11,endHour:12 }],
  Friday: [{ id:5, title:'Understanding the World Economy', location:'', startHour:11,endHour:12 }],
};

export default function SchedulePage() {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { user } = useAuth();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = () => {
    // Remove the event from the correct day
    const newEvents = { ...events };
    for (const day in newEvents) {
      newEvents[day] = newEvents[day].filter(evt => evt.id !== selectedEvent.id);
    }
    setEvents(newEvents);
    setSelectedEvent(null);
  };

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
        <ScheduleGrid events={events} onEventClick={handleEventClick} />
      </div>
      {/* Popup/modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
            <h2 className="text-lg font-bold mb-2">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.location}</p>
            {(user?.role === "admin" || user?.role === "tutor") && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleDelete}
              >
                Delete Event
              </button>
            )}
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}