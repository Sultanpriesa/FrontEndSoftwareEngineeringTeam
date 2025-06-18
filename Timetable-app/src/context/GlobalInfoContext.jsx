import React, { createContext, useContext, useState } from "react";
const today = new Date();
const getISODate = (date, hour) => {
  const d = new Date(date);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString();
};
const getDayOfWeek = (offset) => {
  const d = new Date(today);
  d.setDate(today.getDate() - today.getDay() + offset);
  return d;
};

const defaultData = {
  classSchedule: [
    // Monday
    {
      id: 1,
      className: "Software Engineering 101",
      time: getISODate(getDayOfWeek(1), 9),
      room: "A101",
    },
    {
      id: 2,
      className: "Mathematics 201",
      time: getISODate(getDayOfWeek(1), 11),
      room: "B202",
    },
    {
      id: 3,
      className: "Physics I",
      time: getISODate(getDayOfWeek(1), 13),
      room: "C303",
    },
    {
      id: 4,
      className: "English Literature",
      time: getISODate(getDayOfWeek(1), 15),
      room: "D404",
    },
    {
      id: 5,
      className: "Computer Science Lab",
      time: getISODate(getDayOfWeek(1), 17),
      room: "Lab 1",
    },
    // Tuesday
    {
      id: 6,
      className: "Data Structures",
      time: getISODate(getDayOfWeek(2), 9),
      room: "A102",
    },
    {
      id: 7,
      className: "Linear Algebra",
      time: getISODate(getDayOfWeek(2), 11),
      room: "B203",
    },
    {
      id: 8,
      className: "Chemistry I",
      time: getISODate(getDayOfWeek(2), 13),
      room: "C304",
    },
    {
      id: 9,
      className: "World History",
      time: getISODate(getDayOfWeek(2), 15),
      room: "D405",
    },
    {
      id: 10,
      className: "AI Lab",
      time: getISODate(getDayOfWeek(2), 17),
      room: "Lab 2",
    },
    // Wednesday
    {
      id: 11,
      className: "Software Engineering 101",
      time: getISODate(getDayOfWeek(3), 9),
      room: "A101",
    },
    {
      id: 12,
      className: "Mathematics 201",
      time: getISODate(getDayOfWeek(3), 11),
      room: "B202",
    },
    {
      id: 13,
      className: "Physics I",
      time: getISODate(getDayOfWeek(3), 13),
      room: "C303",
    },
    {
      id: 14,
      className: "English Literature",
      time: getISODate(getDayOfWeek(3), 15),
      room: "D404",
    },
    {
      id: 15,
      className: "Computer Science Lab",
      time: getISODate(getDayOfWeek(3), 17),
      room: "Lab 1",
    },
    // Thursday
    {
      id: 16,
      className: "Operating Systems",
      time: getISODate(getDayOfWeek(4), 9),
      room: "A103",
    },
    {
      id: 17,
      className: "Discrete Mathematics",
      time: getISODate(getDayOfWeek(4), 11),
      room: "B204",
    },
    {
      id: 18,
      className: "Chemistry I",
      time: getISODate(getDayOfWeek(4), 13),
      room: "C304",
    },
    {
      id: 19,
      className: "Philosophy",
      time: getISODate(getDayOfWeek(4), 15),
      room: "D406",
    },
    {
      id: 20,
      className: "Robotics Lab",
      time: getISODate(getDayOfWeek(4), 17),
      room: "Lab 3",
    },
    // Friday
    {
      id: 21,
      className: "Software Engineering 101",
      time: getISODate(getDayOfWeek(5), 9),
      room: "A101",
    },
    {
      id: 22,
      className: "Mathematics 201",
      time: getISODate(getDayOfWeek(5), 11),
      room: "B202",
    },
    {
      id: 23,
      className: "Physics I",
      time: getISODate(getDayOfWeek(5), 13),
      room: "C303",
    },
    {
      id: 24,
      className: "English Literature",
      time: getISODate(getDayOfWeek(5), 15),
      room: "D404",
    },
    {
      id: 25,
      className: "Computer Science Lab",
      time: getISODate(getDayOfWeek(5), 17),
      room: "Lab 1",
    },
  ],
  tutors: [
    {
      name: "Dr. Smith",
      email: "smith@college.edu",
      department: "Software Engineering",
    },
    { name: "Dr. Lee", email: "lee@college.edu", department: "Mathematics" },
    { name: "Dr. Gomez", email: "gomez@college.edu", department: "Physics" },
    { name: "Dr. Brown", email: "brown@college.edu", department: "Chemistry" },
    {
      name: "Dr. Carter",
      email: "carter@college.edu",
      department: "Literature",
    },
  ],
  students: [
    {
      name: "Alice Johnson",
      email: "alice@college.edu",
      major: "Software Engineering",
    },
    { name: "Bob Lee", email: "bob@college.edu", major: "Mathematics" },
    { name: "Claire Min", email: "claire@college.edu", major: "Physics" },
    { name: "David Kim", email: "david@college.edu", major: "Chemistry" },
    { name: "Eva Zhang", email: "eva@college.edu", major: "Literature" },
  ],
  classes: [
    {
      id: 1,
      name: "Software Engineering 101",
      instructor: "Dr. Smith",
      credits: 3,
    },
    { id: 2, name: "Mathematics 201", instructor: "Dr. Lee", credits: 4 },
    { id: 3, name: "Physics I", instructor: "Dr. Gomez", credits: 4 },
    { id: 4, name: "English Literature", instructor: "Dr. Carter", credits: 2 },
    {
      id: 5,
      name: "Computer Science Lab",
      instructor: "Dr. Smith",
      credits: 1,
    },
    { id: 6, name: "Data Structures", instructor: "Dr. Smith", credits: 3 },
    { id: 7, name: "Linear Algebra", instructor: "Dr. Lee", credits: 3 },
    { id: 8, name: "Chemistry I", instructor: "Dr. Brown", credits: 4 },
    { id: 9, name: "World History", instructor: "Dr. Carter", credits: 2 },
    { id: 10, name: "AI Lab", instructor: "Dr. Smith", credits: 1 },
    { id: 11, name: "Operating Systems", instructor: "Dr. Smith", credits: 3 },
    { id: 12, name: "Discrete Mathematics", instructor: "Dr. Lee", credits: 3 },
    { id: 13, name: "Philosophy", instructor: "Dr. Carter", credits: 2 },
    { id: 14, name: "Robotics Lab", instructor: "Dr. Smith", credits: 1 },
  ],
};

const GlobalInfoContext = createContext();

export function GlobalInfoProvider({ children }) {
  const [data, setData] = useState(defaultData);

  const addStudent = (student) => {
    setData((prev) => ({ ...prev, students: [...prev.students, student] }));
  };

  return (
    <GlobalInfoContext.Provider value={{ ...data, addStudent }}>
      {children}
    </GlobalInfoContext.Provider>
  );
}

export function useGlobalInfo() {
  return useContext(GlobalInfoContext);
}
