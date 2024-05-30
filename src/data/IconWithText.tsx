import {
  TrendingUp,
  Users,
  BadgeCheck,
  Lightbulb,
  Bird,
  Map,
  Rocket,
  Scale,
  UsersRound,
  Cog,
  MapPin,
  Sun,
  SlidersHorizontal,
} from "lucide-react";

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

const BadgeCheckIcon2 = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <BadgeCheck
      className="flex dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const LightbulbIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Lightbulb className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const BirdIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Bird
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const MapIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Map className="flex text-[#BBE18B] items-center mx-auto" size={30} />
  </div>
);

const RocketIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Rocket className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const ScaleIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Scale className="flex text-[#BBE18B] items-center mx-auto" size={30} />
  </div>
);

const UsersRoundIcon = (
  <div className="flex bg-[#E5F6F2] dark:bg-[#07231c] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UsersRound
      className="flex text-[#78CFBA] items-center mx-auto"
      size={30}
    />
  </div>
);

const CogIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Cog className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const UsersRoundIcon2 = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UsersRound
      className="flex dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const MapPinIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <MapPin className="flex text-[#BBE18B] items-center mx-auto" size={30} />
  </div>
);

const SunIcon = (
  <div className="flex bg-[#E5F6F2] dark:bg-[#07231c] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Sun className="flex text-[#78CFBA] items-center mx-auto" size={30} />
  </div>
);

const SliderHorizontalIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <SlidersHorizontal
      className="flex text-primary items-center mx-auto"
      size={30}
    />
  </div>
);

export const contentIcon = [
  {
    id: 0,
    icon: TrendingUpIcon,
    title: "+ 5 ans",
    subtitle: "Expérience",
  },
  {
    id: 1,
    icon: BadgeCheckIcon,
    title: "272",
    subtitle: "Ateliers animés",
  },
  {
    id: 2,
    icon: UsersIcon,
    title: "3031",
    subtitle: "Jeunes participants",
  },
  {
    id: 3,
    icon: LightbulbIcon,
    title: "100 %",
    subtitle: "Créativité",
  },
  {
    id: 4,
    icon: BirdIcon,
    title: "La connaissance de soi : l’Albatros prend conscience de ses ailes",
    subtitle:
      "L’albatros développe sa capacité d’introspection, identifie ses forces et ses vulnérabilités puis comprend les éléments de son histoire et de son environnement à l’origine de ses croyances limitantes, de ses préjugés et de ses choix.",
  },
  {
    id: 5,
    icon: MapIcon,
    title:
      "La projection de soi : l’Albatros choisit sa destination et son chemin",
    subtitle:
      "L’albatros explore ses potentialités, s’imagine au-delà du champ des possibles, met en mots ses véritables aspirations, ses besoins et ses limites, et développe ainsi sa curiosité et sa capacité à se projeter dans l’avenir et avec autrui.",
  },
  {
    id: 6,
    icon: RocketIcon,
    title: "Le pouvoir d’agir : l’Albatros s’envole librement et à son rythme",
    subtitle:
      "L’albatros voit grandir son estime de soi, sa confiance en soi et son affirmation de soi, mais développe aussi sa motivation intrinsèque, son esprit critique, son expression orale personnelle et sa capacité à solliciter l’autre.",
  },
  {
    id: 7,
    icon: BadgeCheckIcon2,
    title: "L’adhésion du public",
    subtitle:
      "Grâce à la co-construction du cadre d’animation avec le public en début d’atelier et à l’emploi d’outils ludiques et expérientiels, Tous Albatros obtient 100% de participation des jeunes durant ses ateliers, qu’il s’agisse d’un public initialement captif ou volontaire.",
  },
  {
    id: 8,
    icon: ScaleIcon,
    title: "L’horizontalité des participant⋅es",
    subtitle:
      "Tous les bénéficiaires, intervenant⋅es et autres professionnel⋅les présents sont participants. Tous apprenants, tous sachants. Ce principe permet de lever des barrières communicationnelles et favorise la compréhension intergénérationnelle réciproque.",
  },
  {
    id: 9,
    icon: UsersRoundIcon,
    title: "L’individualisation dans le collectif",
    subtitle:
      "La nature des activités proposées permet à la fois l’introspection personnelle de chaque participant et la création collective de savoirs et d’idées bénéfiques à tous. Ainsi, les ateliers représentent un accompagnement à la fois collectif et individualisé.",
  },
  {
    id: 10,
    icon: CogIcon,
    title: "L’animation toujours sur mesure",
    subtitle:
      "Les ateliers sont ajustés, en amont ou en direct, en fonction du nombre de jeunes présents, de leur âge, des genres, du niveau de langue écrit ou oral, des fragilités et vulnérabilités, de la dynamique du groupe, des besoins exprimés et des difficultés rencontrées.",
  },
  {
    id: 11,
    icon: UsersRoundIcon2,
    title: "Public participant",
    subtitle:
      "Jeunes de 9 à 25 ans, mais nous faisons aussi des ateliers pour les personnes qui entourent les jeunes comme leurs parents ou les (futurs) professionnels.",
  },
  {
    id: 12,
    icon: MapPinIcon,
    title: "Lieux d’intervention",
    subtitle:
      "Toute structure publique ou privée des Bouches-du-Rhône, mais aussi possible dans les locaux de Tous Albatros dans le 1e arrondissement de Marseille.",
  },
  {
    id: 13,
    icon: SunIcon,
    title: "Thématiques possibles",
    subtitle:
      "Une ou plusieurs par atelier, autour de la connaissance de soi, de la relation à l’autre, de la promotion de la santé, etc. Challengez-nous !",
  },
  {
    id: 14,
    icon: SliderHorizontalIcon,
    title: "Autres modalités",
    subtitle:
      "Programmes de 1 à 10 ateliers, d’une durée de 1 à 3 heures chacun, pour des groupes de 6 à 35 personnes, mixtes ou non mixtes en âges et en genres.",
  },
];
