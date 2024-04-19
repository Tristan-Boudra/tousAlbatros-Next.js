import { Layout } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";
import { Quote } from "../_components/Quote";
import { Spacing } from "../_components/Spacing";
import { TextWithDescription } from "../_components/TextWithDescription";
import { contentDescription } from "@/src/data/TextWithDescription";
import { Values } from "../_components/Values";
import Team from "../_components/Team";
import { team } from "@/src/data/Team";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="h-full">
      <Quote />
      <Spacing size="md" />
      <TextWithDescription data={contentDescription[2]} />
      <Spacing size="md" />
      <TextWithDescription data={contentDescription[3]} />
      <Spacing size="md" />
      <Values />
      <Spacing size="md" />
      <TextWithDescription data={contentDescription[4]} />
      <Spacing size="md" />
      <Team data={team} />
    </Layout>
  );
}
