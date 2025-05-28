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


// Default data for demonstration. Replace with API calls or dynamic data as needed.
const defaultData = {
  classSchedule: [
    { id: 1, className: "Software Engineering 101", time: getISODate(today, 9), room: "A101" },
    { id: 2, className: "Mathematics 201", time: getISODate(today, 11), room: "B202" },
    { id: 3, className: "Physics I", time: getISODate(today, 13), room: "C303" },
    { id: 4, className: "English Literature", time: getISODate(today, 15), room: "D404" },
    { id: 5, className: "Computer Science Lab", time: getISODate(today, 17), room: "Lab 1" },
  ],
  tutors: [
    { name: "Dr. Smith", email: "smith@college.edu", department: "Software Engineering" },
    { name: "Dr. Lee", email: "lee@college.edu", department: "Mathematics" },
  ],
  students: [
    { name: "Alice Johnson", email: "alice@college.edu", major: "Software Engineering" },
    { name: "Bob Lee", email: "bob@college.edu", major: "Mathematics" },
  ],
  classes: [
    { id: 1, name: "Software Engineering 101", instructor: "Dr. Smith", credits: 3 },
    { id: 2, name: "Mathematics 201", instructor: "Dr. Lee", credits: 4 },
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
