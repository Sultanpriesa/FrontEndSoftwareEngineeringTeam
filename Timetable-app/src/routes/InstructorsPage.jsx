// src/pages/InstructorsPage.jsx
import React from "react";

export default function InstructorsPage() {
  // Example seeded instructors
  const instructors = [
    { name: "Dr. Smith", email: "smith@college.edu", department: "Software Engineering" },
    { name: "Prof. Johnson", email: "johnson@college.edu", department: "Computer Science" },
    { name: "Dr. Lee", email: "lee@college.edu", department: "Mathematics" },
    { name: "Dr. Patel", email: "patel@college.edu", department: "Physics" },
    { name: "Ms. Carter", email: "carter@college.edu", department: "English" },
  ];
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Instructors</h1>
      <div className="grid gap-6">
        {instructors.map(inst => (
          <div key={inst.email} className="card bg-base-200 shadow p-4">
            <div className="text-lg font-semibold text-secondary mb-1">{inst.name}</div>
            <div className="text-sm text-gray-400 mb-1">{inst.email}</div>
            <div className="text-sm text-gray-300">Department: {inst.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
}