'use client'
import Image from 'next/image'
import React from 'react'
import MyButton from './MyButton'
export default function MyLesson({image, description, navigate}) {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt="lesson" width={400} height={250} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{description}</h3>
        <MyButton className='text-gray-800' label="Go" onClick={navigate}/>
      </div>
    </div>
  )
}


