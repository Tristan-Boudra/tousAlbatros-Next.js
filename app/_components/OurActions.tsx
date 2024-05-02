interface OurActionsProps {
  data: {
    id: number;
    icon: React.ReactNode;
    description: string;
  }[];
}

export const OurActions = (props: OurActionsProps) => {
  const contentDescriptionPrestation = props.data;

  return (
    <>
      <div className="px-5 ">
        <div className="bg-primary-foreground w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Actions</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
          Nos Actions
        </h1>
        <div className="flex flex-col gap-10 mt-10">
          {contentDescriptionPrestation.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center"
            >
              {item.icon}
              <p className="text-sm md:text-base font-medium text-muted-foreground md:mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
