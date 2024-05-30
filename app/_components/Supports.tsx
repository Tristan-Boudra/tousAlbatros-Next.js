"use client";

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Support } from "@/src/data/Supports";

export const Supports = () => {
  const { theme } = useTheme();
  const [supportImages, setSupportImages] = useState(Support);

  useEffect(() => {
    const updatedSupportImages = Support.map((support) => {
      if (support.id === 2) {
        return {
          ...support,
          image: theme === "dark" ? "/logo_dark.png" : "/logo.png",
        };
      }
      return support;
    });
    setSupportImages(updatedSupportImages);
  }, [theme]);

  return (
    <div className="flex flex-col px-5">
      <div>
        <div className="bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Evolution</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Les reconnaissances qui ont marqué l'association
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 relative w-full mt-10">
        {supportImages.map((content, index) => (
          <div
            key={content.id}
            className={`flex flex-col md:flex-row text-center md:text-left items-center gap-10`}
          >
            <Image
              src={content.image}
              className={`w-44 md:w-auto md:h-28 object-cover rounded-lg ${
                content.background ? "dark:bg-white p-2 rounded-lg" : ""
              }`}
              alt={`support ${index + 1}`}
              width={500}
              height={500}
            />
            <p>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
