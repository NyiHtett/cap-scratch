'use client'
import React from 'react'

export default function MyButton({label, onClick}) {
  return (
    <div>
      <button onClick={onClick} className=' hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded shadow'>
        <text> {label} </text>
      </button>
    </div>
  )
}


