"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FormContact } from "./FormContact";
import { useEffect, useState } from "react";

export const ContentContact = () => {
  const [imageSize, setImageSize] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      setImageSize(window.innerWidth < 640 ? 200 : 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-32 md:gap-64">
      <div className="px-10 lg:px-0 lg:w-1/3 flex flex-col">
        <h2 className="text-3xl font-semibold text-accent-foreground">
          Nous sommes{" "}
          <span className="text-primary font-bold">à votre disposition</span>{" "}
          pour discuter
        </h2>
        <p className="mt-5 text-muted-foreground">
          Notre équipe est disponible de 9h à 17h30, du lundi au jeudi et sera
          ravie d'échanger avec vous.
        </p>
        <Image
          src="/contact.png"
          className="mx-auto mt-10 md:mt-0"
          alt="Illustration Tous Albatros"
          width={imageSize}
          height={imageSize}
        />
      </div>
      <div className="flex flex-col">
        <FormContact />
      </div>
    </div>
  );
};
