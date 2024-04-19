"use client";

import { useState } from "react";
import chevronUp from "/chevronUp.png";
import Image from "next/image";

type WorkWithCarouselProps = {
  data: {
    id: number;
    image: string;
  }[];
};

export const WorkWithCarousel = (props: WorkWithCarouselProps) => {
  const dataImg = props.data;
  const allImages = dataImg.map((img) => img.image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  };
  return (
    <ul className="flex flex-row w-full md:w-1/2 relative items-center lg:flex-row gap-10 flex-wrap">
      {dataImg.map((img, index) => (
        <li
          key={index}
          className={`flex flex-col ${
            index === currentImageIndex ? "" : "hidden"
          }`}
        >
          <Image
            src={img.image}
            alt="Logo TousAlbatros"
            width={500}
            height={500}
          />
        </li>
      ))}
      <Image
        alt="chevronPrevImage"
        src="/chevronUp.png"
        className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 md:h-20 left-[-30px] md:left-0 transform -translate-y-1/2 rotate-[-90deg]"
        onClick={prevImage}
        width={500}
        height={500}
      />
      <Image
        alt="chevronNextImage"
        src="/chevronUp.png"
        className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 right-[-30px] md:h-20 md:right-0 transform -translate-y-1/2 rotate-90"
        onClick={nextImage}
        width={500}
        height={500}
      />
    </ul>
  );
};
