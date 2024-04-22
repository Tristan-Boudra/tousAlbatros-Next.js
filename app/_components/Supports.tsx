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
    <div className="flex flex-col">
      <div className="bg-[#D8F2FA] dark:bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">
          Entreprises donatrices
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-5 relative w-full mt-10">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            className="md:w-auto h-20 md:h-20 object-cover"
            alt={`support ${index + 1}`}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};
