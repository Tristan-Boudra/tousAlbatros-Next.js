import { Layout } from "@/src/components/layout/Layout";
import IconWithText from "./_components/IconWithText";
import { contentIcon } from "@/src/data/IconWithText";

export default function Home() {
  return (
    <Layout className="h-full">
      <div className="flex justify-center">
        <IconWithText data={contentIcon} />
      </div>
    </Layout>
  );
}
