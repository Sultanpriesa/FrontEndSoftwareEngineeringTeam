import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function ClassInfoCard({ classInfo, onDelete, onEdit }) {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (user?.role === "admin") setShowModal(true);
  };

  return (
    <>
      <div
        className="bg-base-200 rounded-lg shadow py-4 px-11 mb-4 w-full max-w-md mx-auto cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-primary">{classInfo.code}</span>
          <span className="text-sm text-gray-400">Tutor: {classInfo.tutor}</span>
        </div>
        <div className="text-xl font-semibold mb-1">{classInfo.name}</div>
        <div className="text-gray-300 mb-4 text-sm">{classInfo.description}</div>
        <div className="flex flex-col text-sm text-gray-400">
          <span>Date: {classInfo.date}</span>
          <span>Time: {classInfo.startTime} - {classInfo.endTime}</span>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-base-300 p-6 rounded shadow-lg min-w-[300px]">
            <h2 className="text-lg font-bold mb-2">{classInfo.name}</h2>
            <p className="mb-4">{classInfo.description}</p>
            <div className="flex gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowModal(false);
                  onDelete && onDelete(classInfo);
                }}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowModal(false);
                  onEdit && onEdit(classInfo);
                }}
              >
                Edit
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
