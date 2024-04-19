"use client";

import { Toaster } from "@/src/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {props.children}
    </ThemeProvider>
  );
};
