import { Layout } from "@/src/components/layout/Layout";
import { contentDescriptionPrestation } from "@/src/data/TextActions";
import { PageParams } from "@/src/types/next";
import { OurActions } from "../_components/OurActions";
import { Spacing } from "../_components/Spacing";
import { ActionPdf } from "../_components/ActionPdf";
import { contentIconPrestation } from "../_components/IconServices";
import { Work } from "../_components/Work";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="h-full">
      <OurActions data={contentDescriptionPrestation} />
      <Spacing size="md" />
      <ActionPdf data={contentIconPrestation} />
      <Spacing size="md" />
      <Work />
    </Layout>
  );
}
