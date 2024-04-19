import { Layout, LayoutTitle } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";
import { Quote } from "../_components/Quote";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="h-full">
      <Quote />
    </Layout>
  );
}
