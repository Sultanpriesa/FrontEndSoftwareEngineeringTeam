import React from 'react';

export default function EventCard({ event, onClick }) {
  const topOffset = (event.startHour - 8) * 5;
  const height = (event.endHour - event.startHour) * 5;

  return (
    <div
      className="absolute left-2 right-2 p-2 bg-primary text-primary-content rounded shadow cursor-pointer"
      style={{ top: `${topOffset}rem`, height: `${height}rem` }}
      onClick={() => onClick(event)}
    >
      <div className="text-sm font-semibold">{event.title}</div>
      <div className="text-xs">{event.location}</div>
    </div>
  );
}