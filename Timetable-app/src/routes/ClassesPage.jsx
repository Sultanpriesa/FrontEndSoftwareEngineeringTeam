import React from "react";
import ClassInfoCard from "../components/ClassInfoCard";
import { useAuth } from "../context/AuthContext";

// Seeded class data
const classData = [
  {
    code: "IT701",
    tutor: "Dr. Smith",
    name: "Software Engineering",
    description: "Advanced software engineering concepts and practices.",
    date: "2025-05-22",
    startTime: "09:00",
    endTime: "11:00"
  },
  {
    code: "CS202",
    tutor: "Prof. Johnson",
    name: "Data Structures",
    description: "In-depth study of data structures and algorithms.",
    date: "2025-05-23",
    startTime: "13:00",
    endTime: "15:00"
  },
  {
    code: "MA303",
    tutor: "Dr. Lee",
    name: "Discrete Mathematics",
    description: "Logic, set theory, combinatorics, and graph theory.",
    date: "2025-05-24",
    startTime: "10:00",
    endTime: "12:00"
  },
  {
    code: "PH101",
    tutor: "Dr. Patel",
    name: "Physics I",
    description: "Fundamentals of mechanics and thermodynamics.",
    date: "2025-05-25",
    startTime: "14:00",
    endTime: "16:00"
  }
];

const allTutors = [
  "Dr. Smith",
  "Prof. Johnson",
  "Dr. Lee",
  "Dr. Patel",
  "Ms. Carter"
];

export default function ClassesPage() {
  const { user } = useAuth();
  return (
    <div className="p-8 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Classes</h1>
    
      <div className="flex gap-6 ">
        {classData.map(cls => (
          <ClassInfoCard key={cls.code} classInfo={cls} />
        ))}
      </div>
    </div>
  );
}
