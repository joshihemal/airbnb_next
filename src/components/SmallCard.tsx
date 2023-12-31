import React from "react";
import { ExploreData } from "@/pages";
import Image from "next/image";

const SmallCard = ({ img, location, distance }: ExploreData) => {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt=""
          className="rounded-lg"
          fill={true}
          sizes="100%"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
