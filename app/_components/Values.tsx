import Image from "next/image";
import { ValuesWithImage } from "./ValueWithImages";
import { valuesBottom, valuesMiddle, valuesTop } from "@/src/data/Values";
import { ValueCard } from "./ValueCard";

export const Values = () => {
  return (
    <section className="flex flex-col relative px-5 ">
      <div className="bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Notre charte</p>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Nos valeurs au quotidien
        </h1>
        <div className="flex flex-col gap-10 mt-10 items-center">
          <ValueCard data={valuesTop} />
          <div className="flex flex-col lg:flex-row items-center">
            <ValuesWithImage data={valuesMiddle[0]} />
            <Image
              src="/aPropos/value.png"
              className="w-full md:w-1/2 lg:w-1/4 mx-auto py-10 max-w-xs md:max-w-none lg:max-w-full"
              alt="Background header"
              width={500}
              height={500}
            />
            <ValuesWithImage data={valuesMiddle[1]} />
          </div>

          <ValueCard data={valuesBottom} />
        </div>
      </div>
    </section>
  );
};
