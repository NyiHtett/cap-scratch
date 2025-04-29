import React from 'react'
import defineY from './defineY.png'
import defineX from './defineX.png'
import player from './player.png'
import playerBlock from './playerBlock.png'
import Image from 'next/image'
import laser from './laser.png'
import laserBlock from './laserBlock.png'
import laserSpeedUp from './laserSpeedUp.png'
import deleteImage from './delete.png'
import addImage from './addShoot.png'
export default function page() {
  return (
    <div className='my-global-class'>
      {/* spaceship */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Example for Spaceship (Sprite 1)</h1>
        <Image src={player} alt="Spaceship Example" width={800} height={800} className="rounded-xl shadow-md" />
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Code</h1>
        <Image src={playerBlock} alt="Player Block" width={800} height={800} className="rounded-xl shadow-md" />
        <Image src={defineX} alt="Define X" width={800} height={800} className="rounded-xl shadow-md" />
        <Image src={defineY} alt="Define Y" width={800} height={800} className="rounded-xl shadow-md" />
      </div>
      </div>

      {/* lasers */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Example for lasers (Sprite 2)</h1>
        <Image src={laser} alt="Spaceship Example" width={800} height={800} className="rounded-xl shadow-md" />
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Code</h1>
        <Image src={laserBlock} alt="laser Block" width={800} height={800} className="rounded-xl shadow-md" />
        
      </div>
      </div>


      {/* speed up lasers */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Speeding up the lasers</h1>
        <Image src={laserSpeedUp} alt="Spaceship Example" width={800} height={800} className="rounded-xl shadow-md" />
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Code</h1>
        <text className='text-2xl font-bold'>Delete this code from laser</text>
        <Image src={deleteImage} alt="laser Block" width={800} height={800} className="rounded-xl shadow-md" />
        <text className='text-2xl font-bold'>Add shoot code to the spaceship</text>
        <Image src={addImage} alt="laser Block" width={800} height={800} className="rounded-xl shadow-md" />
      </div>
      </div>
      
      

      

    </div>
  )
}
