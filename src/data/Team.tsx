export const team = [
  {
    id: 0,
    name: "Camille P.",
    role: "Présidente",
    image: "/teams/1.1 Camille P. - Présidente.jpg",
  },
  {
    id: 1,
    name: "Camille M.",
    role: "Secrétaire",
    image: "/teams/1.2 Camille M. - Secrétaire.jpg",
  },
  {
    id: 2,
    genre: "female",
    name: "Blandine",
    role: "Trésorière",
  },
  {
    id: 3,
    name: "Mylène",
    role: "Directrice",
    image: "/teams/2.1 Mylène - Directrice.jpg",
  },
  {
    id: 4,
    name: "Camille H.",
    role: "Chargée de développement",
    image: "/teams/2.2 Camille H. - Chargée de développement.jpg",
  },
  {
    id: 5,
    name: "Emma",
    role: "Coordinatrice de projets",
    image: "/teams/2.3 Emma - Coordinatrice des projets.jpg",
  },
  {
    id: 6,
    name: "Solenn",
    role: "Assistante de projets",
    image: "/teams/2.4 Solenn - Assistante de projets.jpg",
  },
  {
    id: 7,
    name: "Eva",
    role: "Volontaire en service civique",
    image: "/teams/2.5 Eva - Volontaire en service civique.jpg",
  },
  {
    id: 8,
    genre: "female",
    name: "Simone",
    role: "Volontaire en service civique",
  },
  {
    id: 9,
    genre: "female",
    name: "Clara",
    role: "Assistance de service social stagiaire",
  },
  {
    id: 10,
    name: "Wicem",
    role: "Assistante de service social stagiaire",
    image: "/teams/2.7 Wicem - Assistante de service social stagiaire.jpg",
  },
  {
    id: 11,
    name: "Adilsa",
    role: "Administratrice",
    image: "/teams/3. Adilsa - Administratrice.jpg",
  },
  {
    id: 12,
    name: "Alexandra",
    role: "Administratrice",
    image: "/teams/3. Alexandra - Administratrice.jpg",
  },
  {
    id: 13,
    name: "Céline D.",
    role: "Administratrice",
    image: "/teams/3. Céline D. - Administratrice.jpg",
  },
  {
    id: 14,
    name: "Laurie",
    role: "Administratrice",
    image: "/teams/3. Laurie - Administratrice.jpg",
  },
  {
    id: 15,
    name: "Sophie",
    role: "Administratrice",
    image: "/teams/3. Sophie - Administratrice.jpg",
  },
  {
    id: 16,
    genre: "female",
    name: "Céline C.",
    role: "Administratrice",
  },
  {
    id: 17,
    name: "Athénaïs",
    role: "Bénévole",
    image: "/teams/4. Athénas - Bénévole.jpg",
  },
  {
    id: 18,
    name: "Chloé",
    role: "Bénévole",
    image: "/teams/4. Chloé - Bénévole.jpg",
  },
  {
    id: 19,
    genre: "male",
    name: "Michèle",
    role: "Bénévole",
  },
  {
    id: 20,
    genre: "male",
    name: "Pierre",
    role: "Bénévole",
  },
  {
    id: 21,
    name: "Tristan",
    role: "Bénévole",
    image: "/teams/4. Tristan - Bénévole.jpg",
  },
];

export const teamsWithImages = team.map((member) => {
  if (!member.image) {
    const imageNumber =
      member.genre === "male"
        ? Math.floor(Math.random() * 50) + 1
        : Math.floor(Math.random() * 49) + 51;
    return {
      ...member,
      image: `https://avatar.iran.liara.run/public/${imageNumber}`,
    };
  }
  return member;
});
