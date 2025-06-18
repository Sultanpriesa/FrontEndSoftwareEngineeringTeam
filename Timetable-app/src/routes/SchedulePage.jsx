import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import useAuth  from '../Hooks/UseAuth.js';
import { useGlobalInfo } from "../context/GlobalInfoContext";


export default function SchedulePage() {
  const { classSchedule } = useGlobalInfo();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { user } = useAuth();

  const events = classSchedule.map(cls => ({
    id: cls.id,
    title: cls.className,
    start: cls.time, 
    room: cls.room
  }));

  const filteredEvents = user?.role === "tutor"
    ? events.filter(e => user.classes?.includes(e.id))
    : events;

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
          events={filteredEvents}
          eventClick={handleEventClick}
          height="auto"
          slotMinTime="09:00:00"   
          slotMaxTime="19:00:00"
          hiddenDays={[0, 6]} 
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