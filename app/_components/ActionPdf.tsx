import Link from "next/link";

interface ActionPdfProps {
  data: {
    id: number;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    linkPdf: string;
  }[];
}

export const ActionPdf = (props: ActionPdfProps) => {
  const contentIcon = props.data;
  return (
    <>
      <div className="px-5 md:px-0">
        <p className="font-medium text-sm text-accent-foreground">
          Cliquez sur notre brochure pour visualiser notre offre d’ateliers
          d’Envol.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 flex-wrap mt-10">
          {contentIcon.map((item) => (
            <Link
              key={item.id}
              href={item.linkPdf}
              className="flex flex-col flex-start md:flex-row md:items-center gap-5 md:gap-0"
            >
              {item.icon}
              <div className="flex flex-col md:ml-3 mt-2 md:mt-0 w-72">
                <p className="text-xl md:text-2xl font-medium text-accent-foreground">
                  {item.title}
                </p>
                <p className="text-sm md:text-base font-medium text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
