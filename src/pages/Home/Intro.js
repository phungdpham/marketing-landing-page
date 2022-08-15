import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-20">
      <div className="flex flex-col space-y-10">
        <h1 className="text-7xl font-semibol text-primary sm:text-6xl">The Best <br/><b className="text-secondary">Marketing</b></h1>
        <h1 className="text-4xl font-semibold">Doesn't feel like marketing</h1>
        <button className="px-16 py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary">Get Started</button>
      </div>
      <div className="p-10">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_hwcplx4x.json"
          background="transparent"
          speed="1"
          // style="width: 300px; height: 300px;"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Intro;