import React from 'react';
import EventCard from './EventCard';

export default function DayColumn({ day, events }) {
  return (
    <div className="flex-1 border-l relative">
      <div className="text-sm font-medium p-2 sticky top-0 bg-base-100 border-b">{day}</div>
      {events.map(evt => (
        <EventCard key={evt.id} event={evt} />
      ))}
    </div>
  );
}