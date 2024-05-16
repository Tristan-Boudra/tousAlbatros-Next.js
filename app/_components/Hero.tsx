"use client";

/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/src/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Herro = () => {
  const arrayImageHero = [
    {
      id: 1,
      src: "/hero/atelier1.jpeg",
      alt: "Atelier éducatif 1",
    },
    {
      id: 2,
      src: "/hero/atelier2.jpeg",
      alt: "Atelier éducatif 2",
    },
  ];
  return (
    <div>
      <div className="relative px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto py-32 sm:pb-24 sm:pt-10 lg:pb-32 lg:pt-10 flex flex-col md:flex-row justify-center items-center gap-20 md:gap-0">
          <div className="text-center md:text-left md:pr-20 md:w-1/2 w-full flex flex-col">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
              Tous Albatros
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Pour l'envol de la jeunesse
            </p>
            <div className="mt-32 flex items-center justify-center md:justify-start gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm"
              >
                Nous contacter
              </Link>
              <Link
                href="/actions"
                className="text-sm font-semibold leading-6 text-foreground"
              >
                Nos actions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Carousel>
              <CarouselContent>
                {arrayImageHero.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 flex justify-center">
                      <Card>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={400}
                          className="rounded-xl"
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Herro;
