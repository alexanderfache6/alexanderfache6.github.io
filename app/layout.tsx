import type { Metadata } from "next";
import "./globals.css";

import { NAME, TITLE } from "@/constants/constants";

export const metadata: Metadata = {
  title: `${NAME} - ${TITLE}`,
  description: `Personal portfolio of ${NAME}, a ${TITLE} specializing in land cover change with satellite imagery.`,
  keywords: ["Software Engineer", "Researcher", "Remote Sensing"],
  authors: [{ name: `${NAME}` }],
  openGraph: {
    title: `${NAME} - ${TITLE}`,
    description: "Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}