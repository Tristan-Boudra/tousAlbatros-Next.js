/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const Quote = () => {
  return (
    <section className="flex flex-col md:flex-row items-center relative">
      <div>
        <p className="text-accent-foreground text-3xl font-bold">
          <span className="text-primary text-4xl">"</span>Tout le monde est un
          génie. Mais si on juge un poisson sur sa capacité à grimper à un
          arbre, il passera sa vie à croire qu’il est stupide.
          <span className="text-primary text-4xl">"</span>
        </p>
        <p className="text-sm mt-5">Albert Einstein</p>
      </div>
      <Image
        src={"/quote.png"}
        className="w-96 h-64 top-0 object-cover"
        alt="Background header"
        width={500}
        height={500}
      />
    </section>
  );
};
