import React from 'react';
import useAuth from '../Hooks/UseAuth.js';
import { useGlobalInfo } from "../context/GlobalInfoContext";

export default function StudentsPage() {
  const { user } = useAuth();
  const { students } = useGlobalInfo();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div key={student.email} className="bg-base-200 rounded-lg p-4">
            <div className="font-semibold">{student.name}</div>
            <div className="text-sm text-gray-400">{student.email}</div>
            <div className="text-sm text-gray-300">Major: {student.major}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
