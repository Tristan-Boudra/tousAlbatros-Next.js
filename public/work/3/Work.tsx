"use client";

import { Project } from "@/src/data/Work";
import React from "react";
import { WorkWithCarousel } from "../../../app/_components/WorkWithImages";

export const Work = () => {
  const [active, setActive] = React.useState(0);
  const handleShow = (index: number) => {
    setActive(index);
  };
  return (
    <>
      <div className="px-5">
        <div className="bg-[#D8F2FA] bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Ateliers</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Nos programmes d’ateliers les plus demandés
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div className="z-10 max-w-7xl gap-10 flex flex-col md:flex-row w-full items-center justify-between md:h-[560px]">
            <div className="w-full md:w-2/3 flex flex-col gap-5">
              {Project.map((item, index) => (
                <div
                  key={index}
                  className={`border border-slate-300 dark:border-primary-foreground rounded-lg p-4 shadow-sm cursor-pointer duration-300 
                  ${
                    active === index
                      ? "bg-[#D8F2FA] dark:bg-primary-foreground w-full"
                      : "w-full"
                  }
              `}
                  onMouseEnter={() => handleShow(index)}
                >
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-accent-foreground">
                    {item.title}
                  </h1>
                  {active === index && "active" && (
                    <p className="text-sm text-muted-foreground mt-5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 overflow-hidden h-96 flex flex-col border border-slate-200 dark:border-primary-foreground rounded-lg">
              {Project.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full bg-[#D8F2FA] dark:bg-primary-foreground shrink-0 flex items-center justify-center p-4 duration-300"
                  style={{
                    transform: `translateY(-${active * 100}%)`,
                  }}
                >
                  <WorkWithCarousel data={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
