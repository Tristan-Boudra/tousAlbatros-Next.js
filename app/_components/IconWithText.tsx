import { ReactNode } from "react";

interface IconData {
  id: number;
  icon?: ReactNode;
  title: string;
  subtitle: string;
}

interface IconWithTextProps {
  data: IconData[];
}

export const IconWithText = (props: IconWithTextProps) => {
  const { data } = props;

  if (!Array.isArray(data)) {
    console.error("Invalid data format. Expected an array.");
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
      {data.map((item) => (
        <div className="flex items-center gap-5 md:gap-0" key={item.id}>
          {item.icon}
          <div className="flex flex-col md:ml-3 items-start mt-2 md:mt-0">
            <p className="text-xl md:text-2xl font-medium text-accent-foreground">
              {item.title}
            </p>
            <p className="text-sm md:text-base font-medium text-muted-foreground">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconWithText;
