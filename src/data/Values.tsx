import {
  Bird,
  HeartHandshake,
  Puzzle,
  SlidersHorizontal,
  Smile,
  UserCheck,
  UserCog,
} from "lucide-react";

const UserCogIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UserCog
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const HeartHandIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <HeartHandshake
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const UserCheckIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UserCheck
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const BirdIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Bird className="flex text-[#BBE18B] items-center mx-auto" size={30} />
  </div>
);

const SliderHorizontalIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <SlidersHorizontal
      className="flex text-[#BBE18B] items-center mx-auto"
      size={30}
    />
  </div>
);

const PuzzlePieceIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Puzzle className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const SmileIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Smile className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

export const valuesTop = [
  {
    id: 0,
    icon: UserCogIcon,
    title: "Principe d'imperfection",
    subtitle:
      "J’ai le droit de ne pas savoir, de ne pas comprendre, de questionner, de demander conseils, de me tromper, d’être maladroit·e et d’être excusé·e.",
  },
  {
    id: 1,
    icon: HeartHandIcon,
    title: "Principe de confiance",
    subtitle:
      "J’accueille la différence et l’histoire de chacun·e, j’accorde une confiance a priori en dépassant mes propres préjugés.",
  },
  {
    id: 2,
    icon: UserCheckIcon,
    title: "Principe de disponibilité",
    subtitle:
      "Je me rends disponible et ouvert·e à l’échange, j’adopte une posture d’écoute et j’accorde du temps à l’autre pour répondre à ses interrogations et incompréhensions.",
  },
];

export const valuesMiddle = [
  {
    id: 0,
    icon: BirdIcon,
    title: "Principe de douceur",
    subtitle:
      "J’essaie de ne pas crier et de garder mon calme, je fais preuve de lenteur, je regarde avec tendresse, je réponds aux demandes d’aide et je cherche la réconciliation.",
  },
  {
    id: 1,
    icon: SliderHorizontalIcon,
    title: "Principe d'adaptabilité",
    subtitle:
      "D’une part j’adapte mon discours, ma posture et mes contenus pour que l’autre m’accueille et me comprenne, d’autre part je rends accessibles les services de l’association sans discrimination.",
  },
];

export const valuesBottom = [
  {
    id: 0,
    icon: PuzzlePieceIcon,
    title: "Principe d'auto-réalisation",
    subtitle:
      "Je n’assiste pas mais j’accompagne l’autre vers sa propre réalisation, en valorisant le positif et en transmettant des clefs, et je ne me rends pas indispensable.",
  },
  {
    id: 1,
    icon: SmileIcon,
    title: "Principe de complémentarité",
    subtitle:
      "J’admets la compétence d’autres personnes, intérieures ou extérieures à l’association, et je n’hésite pas à orienter.",
  },
];
