'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import MyLesson from '../components/MyLesson'
import { useRouter } from 'next/navigation';
export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
  return (
    <div className='m-20'>
      <MyLesson image={'https://i.ytimg.com/vi/sqsNb0s7Oq4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbCGGMauQ4LggQkihP5yFiNPvywA'} description={"Space Shuttle"} navigate={()=>router.push('./spaceShuttle')}/>
    </div>
  )
}
