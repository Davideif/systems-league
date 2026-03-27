'use client';
import React, { useState } from "react";

const MoodCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMoodSelect = (mood) => {
    console.log("Selected mood:", mood);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-30 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="bg-white shadow-md rounded-b-2xl px-6 py-4 mt-2 flex items-center gap-6 pointer-events-auto">
        <span className="font-medium">
          How are you feeling today?
        </span>

        <div className="flex gap-4 text-2xl">

          <button
            onClick={() => handleMoodSelect("down")}
            className="hover:scale-125 transition"
          >
            😔
          </button>

          <button
            onClick={() => handleMoodSelect("neutral")}
            className="hover:scale-125 transition"
          >
            😐
          </button>

          <button
            onClick={() => handleMoodSelect("motivated")}
            className="hover:scale-125 transition"
          >
            😀
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default MoodCard;