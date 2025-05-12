import React from 'react';
import Layout from '../components/Layout';
import ScheduleGrid from '../components/ScheduleGrid';

const sampleEvents = {
  Monday: [{ id:1, title:'English 101', location:'', startHour:8,endHour:9 }],
  Tuesday: [{ id:2, title:'Study of Human Biology', location:'', startHour:14,endHour:15 }],
  Wednesday: [{ id:3, title:'Paper review session', location:'', startHour:9,endHour:10 }],
  Thursday: [{ id:4, title:'Room 300 class details', location:'', startHour:11,endHour:12 }],
  Friday: [{ id:5, title:'Understanding the World Economy', location:'', startHour:11,endHour:12 }],
};

export default function SchedulePage() {
  return (
    <Layout>
      <ScheduleGrid events={sampleEvents} />
    </Layout>
  );
}