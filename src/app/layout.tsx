import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PokéNext",
    default: "PokéNext",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body
        className={clsx(
          "antialiased max-w-4xl  flex mx-auto",
          josefin.className
        )}
      >
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
