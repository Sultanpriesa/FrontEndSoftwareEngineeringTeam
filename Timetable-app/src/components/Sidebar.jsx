import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User, LogOut } from 'react-feather';

export default function Sidebar() {
  const items = [
    { label: 'My Schedule', icon: <Home />, path: '/' },
    { label: 'My Classes', icon: <BookOpen />, path: '/classes' },
    { label: 'My Instructors', icon: <User />, path: '/instructors' },
  ];
  return (
    <aside className="w-64 bg-base-100 border-r min-h-0 flex flex-col h-full">
      <div className="flex flex-col items-center py-6 border-b mb-4">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-16 h-16 rounded-full mb-2" />
        <div className="font-bold">My Schedule</div>
        <div className="text-xs text-gray-500">schedule@colleges</div>
      </div>
      <ul className="space-y-2 flex-1">
        {items.map(item => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
              }
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-2 text-gray-600 hover:text-black px-4 py-2 mt-4 mb-2" style={{marginTop:'auto'}}>
        <LogOut size={18} /> Sign Out
      </button>
    </aside>
  );
}