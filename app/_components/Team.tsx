import Image from "next/image";
import React from "react";

type TeamProps = {
  data: {
    id: number;
    name: string;
    role: string;
    image: string;
  }[];
};

export const Team = (props: TeamProps) => {
  const team = props.data;

  return (
    <>
      <div className="bg-[#D8F2FA] w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Equipe</p>
      </div>
      <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
        Notre équipe de passionés
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-10">
        {team.map((item) => (
          <div className="flex flex-col relative w-max" key={item.id}>
            <div className="relative w-40 h-40 rounded-lg group">
              <Image
                src={item.image}
                className="image-team w-full h-full rounded-lg group-hover:opacity-30"
                alt={item.name}
                width={500}
                height={500}
              />
              <div className="text-team font-medium text-xl text-quaternary absolute top-0 left-5 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.name}
              </div>
              <div className="text-team-role absolute top-10 left-5 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
