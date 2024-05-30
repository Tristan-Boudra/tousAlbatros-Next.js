"use client";

/* eslint-disable react/no-unescaped-entities */
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("");
  const [instagramSrc, setInstagramSrc] = useState("");

  useEffect(() => {
    setLogoSrc(theme === "dark" ? "/logo_dark.png" : "/logo.png");
    setInstagramSrc(
      theme === "dark"
        ? "/footer/Instagram_dark.svg"
        : "/footer/Instagram_light.svg"
    );
  }, [theme]);

  return (
    <footer className="flex flex-col gap-10 md:gap-0 justify-between items-center md:items-start w-full p-10 border-t">
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {logoSrc && (
            <Link href="/" legacyBehavior passHref>
              <Image
                src={logoSrc}
                className="cursor-pointer"
                width={120}
                height={120}
                alt="Tous Albatros logo"
              />
            </Link>
          )}
          <p className="text-muted-foreground font-medium text-center md:text-left">
            <span className="text-primary text-xl font-bold">
              Tous Albatros
            </span>
            <br />
            Pour l'envol de la jeunesse
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent-foreground text-lg font-bold">
              Où sommes-nous ?
            </h3>
            <div className="flex flex-row mx-auto gap-5">
              <div className="flex flex-col justify-center text-center md:text-left">
                <h4 className="text-accent-foreground text-md font-bold mt-3 md:text-left">
                  Siège social
                </h4>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  Maison des Associations,
                </p>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  93 la Canebière,
                </p>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  boite aux lettres n°160,
                </p>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  13001 MARSEILLE
                </p>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h4 className="text-accent-foreground text-md font-bold mt-3 md:text-left">
                  Refuge des Albatros
                </h4>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  46 rue des Abeilles,
                </p>
                <p className="text-muted-foreground w-1/2 md:w-64 text-center md:text-left">
                  13001 MARSEILLE
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-5">
            <h3 className="text-accent-foreground text-lg font-bold">
              Contact
            </h3>
            <Link href="tel:0616133806" className="text-muted-foreground mt-3">
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
        <p className="text-muted-foreground text-center">
          © {currentYear}. Tous droits réservés |{" "}
          <Link href="/mentionsLegales">Mentions légales</Link>
        </p>
        <ul className="grid grid-cols-2 items-center md:grid-cols-5 gap-3 align-center">
          <li>
            <Link
              href="https://www.linkedin.com/company/tousalbatros/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/footer/linkedin.svg"
                className="h-10 w-10"
                alt="Logo Linkedin"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/tousalbatros"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/footer/facebook.svg"
                className="h-10 w-10"
                alt="Logo Facebook"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            {instagramSrc && (
              <Link
                href="https://www.instagram.com/tousalbatros/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={instagramSrc}
                  className="h-10 w-10"
                  alt="Logo Instagram"
                  width={100}
                  height={100}
                />
              </Link>
            )}
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@tousalbatros?lang=fr"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/footer/tiktok.svg"
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
                src="/footer/snapchat.svg"
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
