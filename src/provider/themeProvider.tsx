"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps, ReactNode } from "react";

interface ThemeProviderProps extends ComponentProps<typeof NextThemeProvider> {
  children: ReactNode;
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
