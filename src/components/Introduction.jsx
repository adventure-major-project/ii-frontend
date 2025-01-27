import React from 'react'


const Introduction = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
  
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/public/Adventurevideo.mp4"
      autoPlay
      loop
      muted
    ></video>

   
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/50 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Adventure</h1>
      <p className="text-lg md:text-xl text-cream ">
        Engage your audience with stunning visuals.
      </p>
      <button href="#demo" className="mt-6 px-6 py-2 bg-blacklooking text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default Introduction
