import Image from "next/image";
import { ValuesWithImage } from "./ValueWithImages";
import { valuesBottom, valuesMiddle, valuesTop } from "@/src/data/Values";
import { ValueCard } from "./ValueCard";

export const Values = () => {
  return (
    <section className="flex flex-col relative px-5 md:px-0">
      <div className="bg-[#D8F2FA] dark:bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Nos valeurs</p>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Nos valeurs
        </h1>
        <div className="flex flex-col gap-10 mt-10 items-center">
          <ValueCard data={valuesTop} />
          <div className="flex flex-col lg:flex-row items-center">
            <ValuesWithImage data={valuesMiddle[0]} />
            <Image
              src="/value.png"
              className="w-64 h-42 mx-auto md:mx-0 py-10 md:py-0 md:w-auto md:h-52 md:my-10 lg:w-96 lg:h-64 top-0"
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
