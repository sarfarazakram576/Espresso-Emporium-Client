import React from "react";

const Hero = () => {
  return (
    <div className='grid sm:grid-cols-[_1fr] md:grid-cols-2 gap-12 py-32 px-8 bg-[url("https://i.ibb.co/kgv2xzC4/3.png")] bg-center text-white bg-no-repeat bg-cover'>
      <div></div>
      <div className="px-4">
        <h1 className="text-4xl font-semibold mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="mb-6">
          It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
          nostalgia back! Your companion of every moment! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button
          href="#"
          className="btn shadow-none border-2 border-[#E3B577] bg-[#E3B577] text-2xl text-black font-semibold hover:border-white hover:bg-transparent hover:text-white p-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
