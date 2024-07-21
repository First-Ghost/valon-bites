import React from "react";

export const Hero = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 ">
      <div className=" max-h-[500px] relative">
        {/*overlay */}
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-400">Best </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-400">Skanderbegun </span>Sujuk
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://media.istockphoto.com/id/877164972/photo/turkish-sausage-on-skewers-sucuk.jpg?s=612x612&w=0&k=20&c=VuXKp2U-ZhwQiGBSKM-K8r8uY8-qrpPMjLjB1M7yP30="
          alt="Hero"
        />
      </div>
    </div>
  );
};
