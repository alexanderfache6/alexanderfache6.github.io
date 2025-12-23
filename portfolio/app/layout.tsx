import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe - Software Engineer & Researcher",
  description: "Personal portfolio of John Doe, a software engineer and researcher specializing in machine learning, distributed systems, and scalable computing. Explore my projects, research, and professional experience.",
  keywords: ["Software Engineer", "Researcher", "Machine Learning", "Distributed Systems", "Portfolio", "AI", "Full Stack Developer"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Software Engineer & Researcher",
    description: "Explore my portfolio featuring innovative projects in machine learning, distributed systems, and full-stack development.",
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

