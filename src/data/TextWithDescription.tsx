const origineTousAlbatros = [
  {
    id: 0,
    description:
      "<strong class='text-accent-foreground'>Une métaphore :</strong> Le nom de l’association porte la référence baudelairienne à « L’Albatros » dont le potentiel est gâché par un environnement qui lui est défavorable. Nous sommes « Tous Albatros » car chaque individu possède des forces et des vulnérabilités. L’enjeu est de les connaître et d’identifier les champs dans lesquelles elles s’expriment ou se manifestent.",
  },
  {
    id: 1,
    description:
      "<strong class='text-accent-foreground'>Une inquiétude :</strong> Favoriser l’autodétermination et l’autonomie de la jeunesse représente aujourd’hui un impératif de civilisation pour faire face aux enjeux de demain liés à la place et au rôle de l’humain face aux problématiques notamment technologiques et environnementales. Seule une jeunesse consciente et outillée sera parée pour la suite.",
  },
  {
    id: 2,
    description:
      "<strong class='text-accent-foreground'>Un besoin :</strong> « Qui suis-je ? Quel est mon rêve ? Quel sens donner à ma vie ? Comment trouver ma place ? » Notre démarche est d’accompagner les adolescents dans la prise de conscience de leur potentiel et dans la construction de leur identité d’adulte de demain. Stimuler l’éveil de la curiosité est la première étape pour s’envoler comme l’Albatros.",
  },
  {
    id: 3,
    description:
      "<strong class='text-accent-foreground'>Un espoir :</strong> C’est l’idée de l’essaimage. Initions à petite échelle des réflexions et des méthodes qui inspireront des évolutions plus grandes. Semons des graines, offrons aux jeunes les moyens d’apporter eux-mêmes les changements qu’ils attendent. Créons des espaces collectifs de liberté favorables à l’émergence du savoir par les jeunes pour les jeunes.",
  },
  {
    id: 4,
    description:
      "<strong class='text-accent-foreground'>Une générosité :</strong> Chaque Albatros qui rejoint l’équipe fait escale pour ses raisons, avec ses bagages et ses aspirations, empli du désir d’offrir l’accueil et l’accompagnement qu’il ou elle aurait aimé recevoir. Chaque membre de l’Albateam apporte son regard et sa créativité, pour protéger cet espace refuge destiné à tous les jeunes qui vivent le décalage de l’Albatros.",
  },
];

const autodeterminationTousAlbatros = [
  {
    id: 0,
    description:
      "Tous Albatros est une association loi 1901, fondée le 12 mars 2019 par trois femmes, qui a pour objet social de promouvoir l’autodétermination des jeunes, notamment grâce à la stimulation de leur <strong class='text-accent-foreground'>curiosité</strong>, à l’apprentissage de l’autodidaxie, au développement de l’esprit critique et de l’<strong class='text-accent-foreground'>autonomie</strong> ainsi qu’à la révélation de leurs <strong class='text-accent-foreground'>potentiels</strong> propres. Tous Albatros conçoit essentiellement des <strong class='text-accent-foreground'>ateliers collectifs</strong> dits « Ateliers d’Envol ». Nos intervenant⸱es participent au même titre que le groupe et ont pour mission, grâce à <strong class='text-accent-foreground'>l’expérience, le jeu et l’art de poser des questions</strong> (maïeutique), de permettre aux jeunes de <strong class='text-accent-foreground'>trouver leurs propres clés</strong> et de se les <strong class='text-accent-foreground'>échanger entre pairs.</strong>",
  },
];

export const contentDescription = [
  {
    id: 0,
    tag: "Objet social",
    title: "L’autodétermination des Jeunes",
    description: autodeterminationTousAlbatros
      .map((item) => `<p>${item.description}</p>`)
      .join(""),
  },
  {
    id: 1,
    tag: "Objectifs pédagogiques",
    title: "La préparation de l'envol",
    description:
      "Tous Albatros est un projet « Coup de Cœur »​ de la saison 1 de Make The Choice (UPE13), coaché par Erilia France et accompagné par Inter-Made.",
  },
  {
    id: 2,
    tag: "Notre inspiration",
    title: "Les origines de Tous Albatros",
    description: origineTousAlbatros
      .map((item) => `<p>${item.description}</p><br/>`)
      .join(""),
  },
  {
    id: 3,
    tag: "Notre expertise",
    title: "L’agilité pédagogique de Tous Albatros",
    description:
      "Tous Albatros est un projet « Coup de Cœur » de la saison 1 de Make The Choice (UPE13), coaché par Erilia France et accompagné par Inter-Made.",
  },
  {
    id: 4,
    tag: "Education",
    title: "GOUVERNANCE DE NOTRE ASSOCIATION",
    description:
      "Tous Albatros est une association loi 1901 dont le but est de promouvoir l’autodétermination des jeunes, notamment grâce à la stimulation de leur curiosité, à l’apprentissage de l’autodidaxie, au développement de l’esprit critique et de l’autonomie ainsi qu’à la révélation de leurs potentiels propres. L’administration de Tous Albatros s’inspire de la méthode de gouvernance sociocratique afin de garantir : La libre expression de tous les administrateurs et la prise en compte de leurs avis. La complémentarité des regards et des expertises pour bonifier les décisions. La justesse dans la conception de projets adaptés au public adolescent. Une vision globale des enjeux du territoire et sur la mise en œuvre de projets",
  },
  {
    id: 5,
    tag: "Gouvernance",
    title: "ACTIONS ÉDUCATIVES",
    description:
      "Le département des Bouches-du-Rhône en lien avec les services départementaux de l’Éducation Nationale soutient et organise des actions éducatives. Vous faites partie d’une équipe éducative et vous souhaitez en savoir plus sur nos ateliers : cliquez sur notre brochure pour visualiser nos ateliers d’Envol.",
  },
];
