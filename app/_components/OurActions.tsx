/* eslint-disable react/no-unescaped-entities */

export const OurActions = () => {
  return (
    <div className="px-5 ">
      <div className="bg-primary-foreground w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Nos outils</p>
      </div>
      <h1 className="text-2xl md:text-4xl text-accent-foreground font-bold mt-4">
        Une pédagogie croisée
      </h1>
      <div className="flex flex-col gap-10 mt-10">
        <p className="text-sm md:text-base font-medium text-muted-foreground md:mt-4">
          Les activités proposées dans nos Ateliers d’Envol croise les outils
          pédagogiques de l’
          <strong className="text-accent-foreground">
            éducation populaire
          </strong>
          , de la <strong className="text-accent-foreground">formation</strong>,
          de l’<strong className="text-accent-foreground">animation</strong>{" "}
          sociale, culturelle et éducative, de la{" "}
          <strong className="text-accent-foreground">psychothérapie</strong>, du
          coaching en{" "}
          <strong className="text-accent-foreground">
            développement personnel
          </strong>{" "}
          ou encore de l’accompagnement{" "}
          <strong className="text-accent-foreground">social</strong>.
        </p>
        <p className="text-sm md:text-base font-medium text-muted-foreground">
          Ces activités peuvent être :
        </p>
        <ul className="text-sm md:text-base font-medium text-muted-foreground">
          <li>
            - Des{" "}
            <strong className="text-accent-foreground">jeux de cohésion</strong>{" "}
            de groupe (brise-glace ou activité rituelle) afin de créer la
            dynamique de groupe et un sentiment d'appartenance et de solidarité
          </li>
          <li>
            - Des activités autour de{" "}
            <strong className="text-accent-foreground">
              l'expérience sensible et la mise en situation
            </strong>{" "}
            (positionnements dans l’espace, jeux, expériences sociales,
            photo-expression et autres supports visuels, improvisation
            théâtrale, création plastiques, techniques d’impact, etc.) venant
            stimuler la réflexion de façon ludique et active
          </li>
          <li>
            - Des activités de{" "}
            <strong className="text-accent-foreground">
              réflexion collective et individuelle
            </strong>{" "}
            (discussion, débat, tour de parole, temps individuel écrit, parcours
            de réflexion guidée) permettant la conscientisation
          </li>
        </ul>
        <p className="text-sm md:text-base font-medium text-muted-foreground md:mt-4">
          Notre force pédagogique est de s’appuyer sur la dynamique du groupe et
          sur ces expériences pour{" "}
          <strong className="text-accent-foreground">
            stimuler la réflexion et l’échange de clés entre pairs.
          </strong>
        </p>
      </div>
    </div>
  );
};
