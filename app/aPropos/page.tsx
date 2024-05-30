/* eslint-disable react/no-unescaped-entities */
import { Layout } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";
import { Quote } from "../_components/Quote";
import { Spacing } from "../_components/Spacing";
import { TextWithDescription } from "../_components/TextWithDescription";
import { contentDescription } from "@/src/data/TextWithDescription";
import { Values } from "../_components/Values";
import Team from "../_components/Team";
import { teamsWithImages } from "@/src/data/Team";
import { OrigineTextWithDescription } from "../_components/OrigineTextWithDescription";
import IconWithText from "../_components/IconWithText";
import { contentIcon } from "@/src/data/IconWithText";

export default async function RoutePage(props: PageParams<{}>) {
  const filteredContentIcon = contentIcon.filter(
    (item) => item.id >= 7 && item.id <= 10
  );
  return (
    <Layout className="h-full">
      <Quote />
      <Spacing size="md" />
      <OrigineTextWithDescription data={contentDescription[2]} />
      <Spacing size="md" />
      <div className="flex flex-col justify-center px-5">
        <div className="bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">
            Notre expertise
          </p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4 mb-10">
          L'agilité pédagogique de Tous Albatros
        </h1>
        <IconWithText data={filteredContentIcon} />
      </div>
      <Spacing size="md" />
      <Values />
      <Spacing size="md" />
      <Team data={teamsWithImages} />
    </Layout>
  );
}
