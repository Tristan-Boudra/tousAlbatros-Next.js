import { TrendingUp, Users, BadgeCheck, Lightbulb } from "lucide-react";

const TrendingUpIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <TrendingUp
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const UsersIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Users className="flex text-[#BBE18B] items-center mx-auto" size={30} />
  </div>
);

const BadgeCheckIcon = (
  <div className="flex bg-[#E5F6F2] dark:bg-[#07231c] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <BadgeCheck
      className="flex text-[#78CFBA] items-center mx-auto"
      size={30}
    />
  </div>
);

const LightbulbIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Lightbulb className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

export const contentIcon = [
  {
    id: 0,
    icon: TrendingUpIcon,
    title: "+ 8 ans",
    subtitle: "Expérience",
  },
  {
    id: 1,
    icon: UsersIcon,
    title: "100 %",
    subtitle: "Engagés",
  },
  {
    id: 2,
    icon: BadgeCheckIcon,
    title: "100 %",
    subtitle: "Réactifs",
  },
  {
    id: 3,
    icon: LightbulbIcon,
    title: "∞",
    subtitle: "Projets innovants",
  },
];
