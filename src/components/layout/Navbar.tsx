import Image from "next/image";
import { Layout } from "@/src/components/layout/Layout";
import { ModeToggle } from "@/src/features/theme/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/src/components/ui/navigation-menu";

import { cn } from "@/src/lib/utils";
import React from "react";
import Link from "next/link";

export const Navbar = async () => {
  return (
    <nav className="w-full border-b border-border py-1">
      <Layout className="flex flex-row items-center gap-4 py-0">
        <div className="flex-1">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="Tous Albatros logo"
          />
        </div>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/aPropos" legacyBehavior passHref>
                  <NavigationMenuTrigger>A propos</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/actions" legacyBehavior passHref>
                  <NavigationMenuTrigger>Actions</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </Layout>
    </nav>
  );
};
