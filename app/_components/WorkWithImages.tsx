"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type WorkWithCarouselProps = {
  data: {
    id: number;
    image: string;
    alt: string;
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

  const { theme, setTheme } = useTheme();
  const [chevronSrc, setChevronSrc] = useState("");

  useEffect(() => {
    setChevronSrc(theme === "dark" ? "/chevronUp_dark.svg" : "/chevronUp.png");
  }, [theme]);

  return (
    <ul className="flex flex-row w-full relative justify-center items-center gap-10 flex-wrap">
      {dataImg.map((img, index) => (
        <li
          key={index}
          className={`flex flex-col items-center ${
            index === currentImageIndex ? "" : "hidden"
          }`}
        >
          <Image
            src={img.image}
            alt={img.alt}
            width={500}
            height={500}
            className="rounded-lg h-80 w-max"
          />
        </li>
      ))}
      {chevronSrc && (
        <Image
          alt="chevronPrevImage"
          src={chevronSrc}
          className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 md:h-20 left-[-30px] transform -translate-y-1/2 rotate-[-90deg]"
          onClick={prevImage}
          width={500}
          height={500}
        />
      )}
      {chevronSrc && (
        <Image
          alt="chevronNextImage"
          src={chevronSrc}
          className="absolute z-30 top-1/2 cursor-pointer w-14 h-14 md:w-20 right-[-30px] md:h-20 transform -translate-y-1/2 rotate-90"
          onClick={nextImage}
          width={500}
          height={500}
        />
      )}
    </ul>
  );
};
