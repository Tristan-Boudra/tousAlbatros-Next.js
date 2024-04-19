import { ReactNode } from "react";

interface ValueWithImageProps {
  data: {
    id: number;
    icon: ReactNode;
    title: string;
    subtitle: string;
  };
}

export const ValuesWithImage = (props: ValueWithImageProps) => {
  const value = props.data;

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
      <div className="flex flex-col flex-start md:flex-row md:items-center gap-5 md:gap-0">
        {value.icon}
        <div className="flex flex-col md:ml-3 mt-2 md:mt-0 w-72">
          <p className="text-xl md:text-2xl font-medium text-accent-foreground">
            {value.title}
          </p>
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            {value.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
