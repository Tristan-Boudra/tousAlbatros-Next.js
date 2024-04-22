const reviews = [
  {
    id: 0,
    name: "Jeune participant·e",
    description:
      "« Vous nous permettez de nous découvrir chaque jour et de découvrir des moyens d’agir autrement grâce aux idées des autres. »",
  },
  {
    id: 1,
    name: "Adulte présent·e",
    description:
      "« Très bien mené, dynamique positive et constructive. Intervention rythmée, contenu pertinent, activités variées. La progression de la séance est bien pensée et bien orchestrée. La gestion du groupe est maîtrisée et adaptée selon les classes. Intervention de qualité. »",
  },
  {
    id: 2,
    name: "Stagiaire de troisième",
    description:
      "« Tous Albatros est une association qui aide les jeunes à avoir confiance en soi, à réaliser que rien n’est impossible. On peut parler sans se faire juger. »",
  },
  {
    id: 3,
    name: "Jeune participant·e",
    description:
      "« J’ai aimé qu’on puisse se tutoyer tout de suite. Votre façon de nous parler est respectueuse, vous nous traitez d’égal à égal »",
  },
  {
    id: 4,
    name: "Jeune participant·e",
    description:
      "« Une séance de bien-être avec des personnes qui ne sont pas dans le jugement mais dans l’écoute »",
  },
  {
    id: 5,
    name: "Adulte présent·e",
    description:
      "« Très bien mené. Les élèves sont acteurs de leur apprentissage et réalisent au fur et à mesure l’impact de leurs diverses actions »",
  },
  {
    id: 6,
    name: "Jeune participant·e",
    description:
      "« Cet atelier a répondu à certaines questions que je pense me poser. Les intervenantes étaient très bienveillantes et dynamiques. »",
  },
  {
    id: 7,
    name: "Jeune participant·e",
    description:
      "« Ça m’a fait du bien de parler car j’ai tendance à être très silencieuse et ne pas exprimer ce que je ressens par peur du jugement. Merci beaucoup <3 »",
  },
  {
    id: 8,
    name: "Adulte présent",
    description:
      "« C’était vraiment bien, interactif et ludique tout en abordant des sujets complexes et profonds »",
  },
  {
    id: 10,
    name: "Jeune participant·e",
    description:
      "« On ne s’est pas ennuyés, c’est bien structuré. Il y a tout : on joue, on parle. »",
  },
];

export const reviewsWithImages = reviews.map((review) => ({
  ...review,
  image: `https://avatar.iran.liara.run/public/${Math.floor(
    Math.random() * (100 - 1 + 1) + 1
  )}`,
}));
