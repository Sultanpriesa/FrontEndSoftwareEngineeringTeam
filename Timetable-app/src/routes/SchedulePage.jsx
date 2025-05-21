import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useAuth } from '../context/AuthContext';

const today = new Date();
const getISODate = (date, hour) => {
  const d = new Date(date);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString(); // <-- Use full ISO string
};
const getDayOfWeek = (offset) => {
  const d = new Date(today);
  d.setDate(today.getDate() - today.getDay() + offset);
  return d;
};

// Demo events for this week and next week
const sampleEvents = [
  // This week (Mon-Sun)
  { id: 1, title: 'English 101 course', start: getISODate(getDayOfWeek(1), 9), end: getISODate(getDayOfWeek(1), 10), location: 'Room 101' },
  { id: 2, title: 'Study of Human Biology', start: getISODate(getDayOfWeek(2), 11), end: getISODate(getDayOfWeek(2), 12), location: 'Lab 2' },
  { id: 3, title: 'Paper review session', start: getISODate(getDayOfWeek(3), 13), end: getISODate(getDayOfWeek(3), 14), location: 'Room 202' },
  { id: 4, title: 'Room 300 class details', start: getISODate(getDayOfWeek(4), 15), end: getISODate(getDayOfWeek(4), 16), location: 'Room 300' },
  { id: 5, title: 'Understanding the World Economy', start: getISODate(getDayOfWeek(5), 17), end: getISODate(getDayOfWeek(5), 18), location: 'Room 105' },
  // Next week (Mon-Sun)
  { id: 6, title: 'Advanced Calculus', start: getISODate(getDayOfWeek(8), 9), end: getISODate(getDayOfWeek(8), 11), location: 'Room 110' },
  { id: 7, title: 'Physics Lab', start: getISODate(getDayOfWeek(9), 12), end: getISODate(getDayOfWeek(9), 14), location: 'Lab 1' },
  { id: 8, title: 'Literature Seminar', start: getISODate(getDayOfWeek(10), 10), end: getISODate(getDayOfWeek(10), 12), location: 'Room 210' },
  { id: 9, title: 'Chemistry Workshop', start: getISODate(getDayOfWeek(11), 15), end: getISODate(getDayOfWeek(11), 17), location: 'Lab 3' },
  { id: 10, title: 'History Discussion', start: getISODate(getDayOfWeek(12), 16), end: getISODate(getDayOfWeek(12), 17), location: 'Room 115' },
];

export default function SchedulePage() {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { user } = useAuth();

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const handleDelete = () => {
    setEvents(events.filter(evt => evt.id !== parseInt(selectedEvent.id)));
    setSelectedEvent(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">My Schedule</h1>
      <div className="bg-base-200 rounded p-2 shadow-lg">
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          eventClick={handleEventClick}
          height="auto"
          slotMinTime="09:00:00"   
          slotMaxTime="19:00:00"   
        />
      </div>
      {/* Popup/modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-base-300 p-6 rounded shadow-lg min-w-[300px]">
            <h2 className="text-lg font-bold mb-2">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.extendedProps?.location}</p>
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