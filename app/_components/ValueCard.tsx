import { ReactNode } from "react";

interface ValueCardProps {
  data: {
    id: number;
    icon: ReactNode;
    title: string;
    subtitle: string;
  }[];
}

export const ValueCard = (props: ValueCardProps) => {
  const contentIcon = props.data;

  return (
    <div className="flex flex-col lg:flex-row gap-6 flex-wrap">
      {contentIcon.map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-start md:flex-row md:items-center gap-5 md:gap-0"
        >
          {item.icon}
          <div className="flex flex-col md:ml-3 mt-2 md:mt-0 md:w-full lg:w-56">
            <p className="text-xl font-medium text-accent-foreground">
              {item.title}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
