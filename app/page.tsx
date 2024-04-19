import { Layout } from "@/src/components/layout/Layout";
import IconWithText from "./_components/IconWithText";
import { contentIcon } from "@/src/data/IconWithText";
import { contentDescription } from "@/src/data/TextWithDescription";
import { TextWithDescription } from "./_components/TextWithDescription";
import { Spacing } from "./_components/Spacing";
import { CarouselComponent } from "./_components/carousel";

export default function Home() {
  return (
    <Layout className="h-full">
      <div className="flex justify-center">
        <IconWithText data={contentIcon} />
      </div>
      <Spacing size="md" />
      <TextWithDescription data={contentDescription[0]} />
      <Spacing size="md" />
      <TextWithDescription data={contentDescription[1]} />
      <Spacing size="md" />
      <div className="flex justify-center">
        <CarouselComponent />
      </div>
    </Layout>
  );
}
