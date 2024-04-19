import { Home, Presentation } from "lucide-react";

const HomeIcon = (
  <div className="flex bg-[#FFF9EB] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Home className="flex text-secondary items-center mx-auto" size={30} />
  </div>
);

const Prestation = (
  <div className="flex bg-[#F2F9E9] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Presentation
      className="flex text-[#BBE18B] items-center mx-auto"
      size={30}
    />
  </div>
);

export const contentDescriptionPrestation = [
  {
    id: 0,
    icon: HomeIcon,
    description:
      "Tous Albatros intervient dans toute structure accueillant un public âgé de 11 à 25 ans : établissements scolaires et d’enseignements supérieurs, centres sociaux, maisons pour tous, missions locales, foyers, etc. Ces interventions, nommées « ateliers d’Envol », visent à répondre aux caractéristiques des adolescents accueillis, aux besoins et aux axes pédagogiques des structures d’accueil. Elles varient en durée et en nombre selon le format de programme souhaité par les structures.",
  },
  {
    id: 1,
    icon: Prestation,
    description:
      "Les ateliers animés par Tous Albatros utilisent l’expérience, le jeu et l’interactivité pour stimuler l’intérêt, la curiosité et la participation des jeunes, favoriser l’expression de soi et l’émergence de la parole du groupe et transmettre des clés de compréhension de soi, de l’autre et de son environnement. Ils portent sur de nombreuses thématiques autour de la connaissance de soi, de la relation à l’autre et de la vision du monde. N’hésitez pas à nous contacter pour plus de renseignements.",
  },
];
