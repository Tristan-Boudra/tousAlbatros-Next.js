/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-10 md:gap-0 justify-between items-center md:items-start w-full p-10 border-t">
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <Image
            src="/logo.png"
            className="h-20 w-auto"
            alt="Logo TousAbatros"
            width={200}
            height={200}
          />
          <p className="text-muted-foreground font-medium text-center md:text-left">
            <span className="text-primary text-xl font-bold">
              Tous Albatros
            </span>
            <br />
            Pour l'envol de la jeunesse
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-foreground text-lg font-bold">
              Où sommes-nous ?
            </h3>
            <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left mt-3">
              Maison des Associations,
            </p>
            <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
              93 la Canebière,
            </p>
            <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
              boite aux lettre n°160,
            </p>
            <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
              13001 MARSEILLE
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-foreground text-lg font-bold">
              Contact
            </h3>
            <Link
              href="telto:0616133806"
              className="text-muted-foreground mt-3"
            >
              06 16 13 38 06
            </Link>
            <Link
              href="mailto:contact@tousalbatros.fr"
              className="text-muted-foreground"
            >
              contact@tousalbatros.fr
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center mt-10 gap-10 md:gap-0 max-w-screen-xl mx-auto">
        <p className="text-[#64748B] text-center">
          © {currentYear}. Tous droits réservés |{" "}
          <Link href="/mentionsLegales">Mentions légales</Link>
        </p>
        <ul className="flex flex-col items-center md:flex-row gap-3 align-center">
          <li>
            <Link href="/" target="_blank" rel="noreferrer">
              <Image
                src="/brands/linkedin.png"
                className="h-10 w-10"
                alt="Logo Linkedin"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank" rel="noreferrer">
              <Image
                src="/brands/facebook.png"
                className="h-10 w-10"
                alt="Logo Facebook"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank" rel="noreferrer">
              <Image
                src="/brands/instagram.png"
                className="h-10 w-10"
                alt="Logo Instagram"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank" rel="noreferrer">
              <Image
                src="/brands/tiktok.png"
                className="h-10 w-10"
                alt="Logo Tiktok"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank" rel="noreferrer">
              <Image
                src="/brands/snapchat.png"
                className="h-9 w-9"
                alt="Logo Snapchat"
                width={100}
                height={100}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
