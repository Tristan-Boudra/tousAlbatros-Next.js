import { LayoutTitle } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return <LayoutTitle>Actions</LayoutTitle>;
}
