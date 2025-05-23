import React from 'react';
import  useAuth  from '../Hooks/UseAuth.js';

export default function StudentsPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for student list */}
        <div className="bg-base-200 rounded-lg p-4">
          <p>Student management functionality coming soon...</p>
        </div>
      </div>
    </div>
  );
}
