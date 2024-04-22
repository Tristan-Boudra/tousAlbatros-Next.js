import { Layout } from "@/src/components/layout/Layout";
import { PageParams } from "@/src/types/next";

/* eslint-disable react/no-unescaped-entities */
export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="h-full">
      <section className="flex flex-col">
        <h1 className="text-3xl font-bold text-accent-foreground">
          Mentions légales
        </h1>
        <h2 className="text-2xl font-bold text-accent-foreground mt-5">
          Editeur du site
        </h2>
        <div className="mt-5">
          <ul className="flex flex-col text-muted-foreground">
            <li>Identificateur de l'association: Tous Albatros</li>
            <li>
              Siège sociale: Maison des Associations, 93 la Canebière, boite aux
              lettre n°160, 13001 MARSEILLE
            </li>
            <li>
              RCS: 123 456 789 | Code NAF: 123456 | Capital social: 123 456 €
            </li>
            <li>N° de téléphone: 06 16 13 38 06</li>
            <li>
              Adresse e-mail:{" "}
              <a
                href="mailto:contact@tousalbatros.fr"
                className="hover:text-primary"
              >
                contact@tousalbatros.fr
              </a>
            </li>
            <li>Dirigeant: Mylène</li>
          </ul>
        </div>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Conception et développement du sites
        </h2>
        <div className="mt-5">
          <ul className="flex flex-col text-muted-foreground">
            <li>Société: Boudra Tristan</li>
            <li>
              N° de téléphone:{" "}
              <a href="tel:0777117198" className="hover:text-primary">
                07 77 11 71 98
              </a>
            </li>
            <li>
              Adresse e-mail:{" "}
              <a
                href="mailto:boudratristan@gmail.com"
                className="hover:text-primary"
              >
                boudratristan@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                href="https://github.com/tristanboudra"
                className="hover:text-primary"
              >
                https://github.com/tristanboudra
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/tristan-boudra/"
                className="hover:text-primary"
              >
                https://www.linkedin.com/in/tristan-boudra/
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Hébergement du site
        </h2>
        <p className="mt-5 text-muted-foreground">
          OVHcloud:{" "}
          <a href="https://www.ovhcloud.com/fr/" className="hover:text-primary">
            https://www.ovhcloud.com/fr/
          </a>
        </p>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Posséssion du nom de domaine
        </h2>
        <p className="mt-5 text-muted-foreground">
          OVHcloud:{" "}
          <a href="https://www.ovhcloud.com/fr/" className="hover:text-primary">
            https://www.ovhcloud.com/fr/
          </a>
        </p>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Utilisation des cookies
        </h2>
        <p className="mt-5 text-muted-foreground">
          Ce site utilise les cookies dans un but de statistiques et de
          fonctionnement uniquement.
        </p>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Utilisation des données personnelles
        </h2>
        <p className="mt-5 text-muted-foreground">
          En utilisant le formulaire présents sur la page de contact, vous
          acceptez le traitement des données personnelles transmises au site.
          Elles sont conservées et traitées à des fins de gestion, d'historique
          et d'amélioration de nos services.
          <br /> Les données sont conservées pour une durée raisonnable de 10
          ans. <br />
          Pour toute demande de suppression, de rectification ou d'accès aux
          données, veuillez effectuer une demande par email à :
          contact@tousalbatros.fr ou par courrier à l'adresse : Maison des
          Associations, 93 la Canebière, boite aux lettre n°160, 13001 MARSEILLE
        </p>
      </section>
      <section className="pt-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Responsabilité de l'association Tous Albatros
        </h2>
        <p className="mt-5 text-muted-foreground">
          Dans les conditions autorisées par la loi, l'association Tous Albatros
          n'encourt aucune responsabilité : Pour toute imprécision,
          inexactitude, omission ou pour tous dommages résultant d'une intrusion
          d'un tiers ayant entraîné une modification des informations mises à
          disposition sur le Site. En cas de dommages provoqués en raison de
          l'accès d'un tiers non autorisé sur le Site ou rendant impossible son
          accès. Le visiteur est informé que l'accès au Site pourra être
          interrompu à tout moment par l'association Tous Albatros en raison de
          maintenance, de sécurité ou toute autre contrainte technique.
        </p>
      </section>
      <section className="py-20 flex flex-col">
        <h2 className="text-2xl font-bold text-accent-foreground">
          Droit applicable
        </h2>
        <p className="mt-5 text-muted-foreground">
          Les présentes mentions sont régies par le droit français. Les
          juridictions françaises sont seules compétentes pour connaître tout
          litige se rapportant directement ou indirectement à l'accès au présent
          Site ou à son utilisation.
        </p>
      </section>
    </Layout>
  );
}
