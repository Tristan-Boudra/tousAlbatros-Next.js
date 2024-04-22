import { Layout } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";
import { ContentContact } from "../_components/ContentContact";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="h-full">
      <ContentContact />
    </Layout>
  );
}
