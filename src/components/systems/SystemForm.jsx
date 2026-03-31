'use client'

import { useState } from 'react'

const SystemForm = () => {
  const [habits, setHabits] = useState([''])

  const handleAddHabit = (e) => {
    e.preventDefault() 
    setHabits([...habits, ''])
  }

  return (
    <form className='grid grid-cols-1 flex-1 max-w-md bg-white p-6 rounded-lg shadow-'>
      
      <input
        type="text"
        placeholder='System Name'
        className='border border-gray-300 rounded-md p-2 w-full mb-4'
      />
    <div className='flex flex-col gap-2 mb-4'>
  {habits.map((habit, index) => (
    <input
      key={index}
      type="text"
      placeholder="Add a habit"
      className='border border-gray-300 rounded-md p-2 w-full'
    />
  ))}

  {/* Only this row is horizontal */}
  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Add a habit"
      className="border border-gray-300 rounded-md p-2 flex-1"
    />

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleAddHabit}
    >
      Add habit
    </button>
  </div>
</div>
    </form>
  )
}

export default SystemForm