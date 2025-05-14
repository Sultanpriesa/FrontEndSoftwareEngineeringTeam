// src/components/ScheduleGrid.jsx
import React from 'react';
import TimeAxis from './TimeAxis';
import DayColumn from './DayColumn';

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

export default function ScheduleGrid({ events, onEventClick }) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-6">
        <TimeAxis />
        {days.map(day => (
          <DayColumn key={day} day={day} events={events[day] || []} onEventClick={onEventClick} />
        ))}
      </div>
    </div>
  );
}