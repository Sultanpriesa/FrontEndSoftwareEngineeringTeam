import React from 'react';
import { Search } from 'react-feather';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-base-100 border-b">
      <div className="text-lg font-semibold">Your College Schedule</div>
      <div className="flex items-center space-x-2">
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search for Papers" className="input input-bordered" />
            <button className="btn btn-square">
              <Search />
            </button>
          </div>
        </div>
        <div className="indicator">
          <span className="badge badge-primary indicator-item">1</span>
          <svg className="w-6 h-6" /* bell icon */ />
        </div>
      </div>
    </header>
  );
}