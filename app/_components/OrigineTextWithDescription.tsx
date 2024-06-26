interface OrigineTextDescriptionProps {
  data: {
    tag: string;
    title: string;
    description: string;
  };
}

export const OrigineTextWithDescription: React.FC<
  OrigineTextDescriptionProps
> = (props) => {
  const { data } = props;

  return (
    <div className="px-5 ">
      <div className="bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">{data.tag}</p>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          {data.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-sm md:text-base font-medium text-muted-foreground mt-4"
        />
      </div>
    </div>
  );
};
