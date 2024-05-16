import Image from "next/image";

export const Supports = () => {
  const images = [
    "/supports/1.png",
    "/supports/2.png",
    "/supports/3.png",
    "/supports/4.png",
    "/supports/5.png",
    "/supports/6.png",
  ];

  return (
    <div className="flex flex-col px-5">
      <div className="bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">
          Ils nous soutiennent
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 relative w-full mt-10">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            className="w-44 md:w-auto md:h-20 object-cover rounded-lg"
            alt={`support ${index + 1}`}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};
