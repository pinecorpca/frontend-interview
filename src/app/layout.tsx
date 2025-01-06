import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pine FrontEnd Interview",
  description: "Pine FrontEnd Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh w-dvw flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
