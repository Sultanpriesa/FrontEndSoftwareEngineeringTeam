import React from 'react';
import { Search, Bell } from 'react-feather';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b shadow-sm">
      <div className="text-2xl font-bold">My Schedule</div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <input type="text" placeholder="Search for Papers" className="input input-bordered w-72 px-4 py-2 rounded" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
            <Search size={18} />
          </button>
        </div>
        <button className="relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">1</span>
        </button>
      </div>
    </header>
  );
}