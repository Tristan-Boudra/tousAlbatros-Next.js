/* eslint-disable react/no-unescaped-entities */
import { Layout } from "@/src/components/layout/Layout";
import { contentDescriptionPrestation } from "@/src/data/TextActions";
import { PageParams } from "@/src/types/next";
import { OurActions } from "../_components/OurActions";
import { Spacing } from "../_components/Spacing";
import { ActionPdf } from "../_components/ActionPdf";
import { contentIconPrestation } from "../_components/IconServices";
import { Work } from "../../public/work/3/Work";
import IconWithText from "../_components/IconWithText";
import { contentIcon } from "@/src/data/IconWithText";

export default async function RoutePage(props: PageParams<{}>) {
  const filteredContentIcon = contentIcon.filter(
    (item) => item.id >= 11 && item.id <= 14
  );
  return (
    <Layout className="h-full">
      <OurActions />
      <Spacing size="md" />
      <div className="flex flex-col justify-center px-5">
        <div className="bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Nos ateliers</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4 mb-10">
          Une diversité d'ateliers
        </h1>
        <IconWithText data={filteredContentIcon} />
      </div>
      <ActionPdf data={contentIconPrestation} />
      <Spacing size="md" />
      <Work />
    </Layout>
  );
}
