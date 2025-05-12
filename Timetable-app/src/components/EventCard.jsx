import React from 'react';

export default function EventCard({ event }) {
  const topOffset = (event.startHour - 8) * 5; // example
  const height = (event.endHour - event.startHour) * 5;

  return (
    <div
      className="absolute left-2 right-2 p-2 bg-primary text-primary-content rounded shadow"
      style={{ top: `${topOffset}rem`, height: `${height}rem` }}
    >
      <div className="text-sm font-semibold">{event.title}</div>
      <div className="text-xs">{event.location}</div>
    </div>
  );
}