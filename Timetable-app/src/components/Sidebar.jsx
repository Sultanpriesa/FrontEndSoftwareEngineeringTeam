import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User } from 'react-feather';

export default function Sidebar() {
  const items = [
    { label: 'My Schedule', icon: <Home />, path: '/' },
    { label: 'My Classes', icon: <BookOpen />, path: '/classes' },
    { label: 'My Instructors', icon: <User />, path: '/instructors' },
  ];
  return (
    <aside className="w-64 bg-base-200 p-4 flex flex-col">
      <div className="mb-8 text-center font-bold">My Schedule</div>
      <ul className="space-y-2 flex-1">
        {items.map(item => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-base-300' : 'hover:bg-base-300'}`
              }
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="btn btn-outline w-full">Sign Out</button>
    </aside>
  );
}