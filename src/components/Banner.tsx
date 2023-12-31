import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]">
      <Image
        src="https://i.ibb.co/pnHVmwW/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        alt=""
        fill={true}
        className="object-cover"
        sizes="100%"
        priority={true}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
