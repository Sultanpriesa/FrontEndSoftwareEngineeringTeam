import React from 'react';

const times = ['8 AM - 9 AM','9 AM - 10 AM','10 AM - 11 AM','11 AM - 12 PM','12 PM - 1 PM','1 PM - 2 PM','2 PM - 3 PM','3 PM - 4 PM','4 PM - 5 PM'];

export default function TimeAxis() {
  return (
    <div className="flex flex-col text-xs text-center">
      {times.map(slot => (
        <div key={slot} className="h-20 border-t">{slot}</div>
      ))}
    </div>
  );
}