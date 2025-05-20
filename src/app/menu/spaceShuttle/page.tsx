import React from "react";
import defineY from "./defineY.png";
import defineX from "./defineX.png";
import player from "./player.png";
import playerBlock from "./playerBlock.png";
import Image from "next/image";
import moving from './moving.png'
import laser from "./laser.png";
import laserBlock from "./laserBlock.png";
import laserSpeedUp from "./laserSpeedUp.png";
import deleteImage from "./delete.png";
import addImage from "./addShoot.png";
import soundEffect from "./sound.jpg";
import stageSound from "./stageSound.png";
import laserSound from './laserSound.png'
import createLemon from './createLemon.jpeg'
import lasserDisappear from './laserDisappear.png'
import lemonCode1 from './lemonCode1.png'
import lemonCode2 from './lemonCode2.png'
import update from './update.png'
import enemyHit from './enemyHit.png'
import updateWhite from './updateWhite.png'
export default function page() {
  return (
    <div className="my-global-class">
      {/* spaceship */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">
            Example for Spaceship (Sprite 1)
          </h1>
          <Image
            src={player}
            alt="Spaceship Example"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Code</h1>
          <Image
            src={playerBlock}
            alt="Player Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
          <Image
            src={defineX}
            alt="Define X"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
          <Image
            src={defineY}
            alt="Define Y"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* lasers */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Example for lasers (Sprite 2)</h1>
          <Image
            src={laser}
            alt="Spaceship Example"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Code</h1>
          <Image
            src={laserBlock}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* speed up lasers */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Speeding up the lasers</h1>
          <Image
            src={laserSpeedUp}
            alt="Spaceship Example"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Code</h1>
          <text className="text-2xl font-bold">
            Delete this code from laser
          </text>
          <Image
            src={deleteImage}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
          <text className="text-2xl font-bold">
            Add shoot code to the spaceship
          </text>
          <Image
            src={addImage}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Day 2</h1>
          <h1 className="text-2xl font-bold">Let add the sound effects</h1>
          <a
            href="https://scratch.mit.edu/projects/548866331/editor/"
            className="text-2xl font-bold text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow this link to copy and paste the sound effects
          </a>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Code</h1>
          <Image
            src={soundEffect}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Add main theme to the stage (Ask instructor)</h1>
          <h1 className="text-2xl font-bold">Add laser sound to the laser (Ask instructor)</h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Code for stage sound</h1>
          <Image
            src={stageSound}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />

          <h1 className="text-2xl font-bold">Code for laser sound</h1>
          <Image
            src={laserSound}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold"> Create your object and the big background (Sprite 3) </h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">Name the object your hitting</h1>
          <h1 className="text-2xl font-bold">Add another background costume</h1>
          <Image
            src={createLemon}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Add lemon code */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold"> Let add moving objects so that the spaceship can shoot </h1>
          <Image
            src={moving}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold"> Add this code to the object you are hitting </h1>
          <Image
            src={lemonCode1}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />

          <Image
            src={lemonCode2}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* sdfa */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold"> Make laser disappear on hit</h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Add this code to laser</h1>
          <Image
            src={lasserDisappear}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* making clones */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold"> Make clones for the objects on hit</h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Update this code in object</h1>
          <Image
            src={update}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />

<h1 className="text-2xl font-bold">Add this code in object</h1>
          <Image
            src={enemyHit}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center m-10"> Congratulations buddy 🎊! you have created the first draft of the game</h1>
      <h1 className="text-3xl font-bold text-center m-10"> Now lets add visual effects ! </h1>
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Let's change the object's color to white when it gets hit</h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Include health and update New Enemy and Enemy Hit code blocks</h1>
          <Image
            src={updateWhite}
            alt="laser Block"
            width={800}
            height={800}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
      
    </div>
  );
}
