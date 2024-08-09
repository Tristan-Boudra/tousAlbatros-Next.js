"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FormContact } from "./FormContact";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";

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
        <a
          href="mailto:contact@tousalbatros.fr"
          className="bg-primary text-accent-foreground rounded-lg p-2 text-center px-5 mt-10 text-sm w-max m-auto"
        >
          Nous contacter
        </a>
        <a
          href="mailto:contact@tousalbatros.fr"
          className="mt-5 text-muted-foreground m-auto"
        >
          contact@tousalbatros.fr
        </a>
        <a href="tel:0616133806" className="mt-2 text-muted-foreground m-auto">
          06 16 13 38 06
        </a>
      </div>
      <div className="flex flex-col">
        <Image
          src="/contact.png"
          className="mx-auto mt-10 md:mt-0"
          alt="Illustration Tous Albatros"
          width={imageSize}
          height={imageSize}
        />
        <a
          href="https://linktr.ee/tousalbatros"
          className="bg-[#BBE18B] dark:text-accent rounded-lg p-2 text-center px-5 text-sm w-max m-auto mt-10"
        >
          Cliquez ici pour <br /> nous suivre ou nous soutenir
        </a>
      </div>
    </div>
  );
};
