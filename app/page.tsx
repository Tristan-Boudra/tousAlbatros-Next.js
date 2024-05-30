/* eslint-disable react/no-unescaped-entities */
import { Layout } from "@/src/components/layout/Layout";
import IconWithText from "./_components/IconWithText";
import { contentIcon } from "@/src/data/IconWithText";
import { contentDescription } from "@/src/data/TextWithDescription";
import { TextWithDescription } from "./_components/TextWithDescription";
import { Spacing } from "./_components/Spacing";
import { CarouselComponent } from "./_components/carousel";
import { Herro } from "./_components/Hero";
import { Supports } from "./_components/Supports";
import { Brands } from "./_components/Brands";

export default function Home() {
  const filteredContentIcon1 = contentIcon.filter((item) => item.id <= 3);
  const filteredContentIcon2 = contentIcon.filter(
    (item) => item.id >= 4 && item.id <= 6
  );

  return (
    <Layout className="h-full">
      <Herro />
      <Spacing size="lg" />
      <div className="flex justify-center">
        <IconWithText data={filteredContentIcon1} />
      </div>
      <Spacing size="xl" />
      <TextWithDescription data={contentDescription[0]} />
      <Spacing size="md" />
      <div className="flex flex-col justify-center px-5">
        <div className="bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">
            Objectifs pédagogiques
          </p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4 mb-10">
          La préparation de l'Envol
        </h1>
        <IconWithText data={filteredContentIcon2} />
      </div>
      <Spacing size="md" />
      <Supports />
      <Spacing size="md" />
      <div className="flex justify-center px-5 ">
        <CarouselComponent />
      </div>
      <Spacing size="md" />
      <Brands />
    </Layout>
  );
}
