"use client";

import { Project } from "@/src/data/Work";
import React from "react";
import { WorkWithCarousel } from "./WorkWithImages";

export const Work = () => {
  const [active, setActive] = React.useState(0);
  const handleShow = (index: number) => {
    setActive(index);
  };
  return (
    <>
      <div className="bg-[#D8F2FA] w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Ateliers</p>
      </div>
      <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
        Nos programmes d’ateliers les plus demandés
      </h1>
      <div className="flex items-center justify-center bg-white">
        <div className="z-10 max-w-7xl gap-10 flex flex-col md:flex-row w-full items-center justify-between h-[560px]">
          <div className="md:w-5/12 space-y-3">
            {Project.map((item, index) => (
              <div
                key={index}
                className={`border border-slate-300 rounded-lg p-4 shadow-sm cursor-pointer duration-300 
            ${active === index ? "bg-[#D8F2FA] w-full" : "bg-white w-11/12"}
            `}
                onMouseEnter={() => handleShow(index)}
              >
                <h1 className="text-xl font-bold text-accent-foreground">
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
          <div className="md:w-7/12 rounded-3xl overflow-hidden bg-white h-96 flex flex-col border border-slate-200">
            {Project.map((item, index) => (
              <div
                key={index}
                className="w-full h-full shrink-0 flex items-center justify-center p-4 duration-300"
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
    </>
  );
};
