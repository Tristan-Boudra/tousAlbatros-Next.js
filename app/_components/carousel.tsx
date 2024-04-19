"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { reviews } from "@/src/data/Carousel";

export const CarouselComponent = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <div className="bg-[#D8F2FA] w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Avis</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Les avis de nos jeunes
        </h1>
      </div>
      <Carousel
        className="w-full mt-10"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {reviews.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="flex flex-col justify-center items-center text-center border rounded-xl w-48 md:w-60 lg:w-72 p-5 relative h-96">
                  <Image
                    src="/vercel.svg"
                    className="h-32 w-auto absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                    alt="Logo TousAlbatros"
                    width={100}
                    height={100}
                  />
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="mt-4">
                    {item.description}
                  </CardDescription>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
