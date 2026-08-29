import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Titanium Prime | Rare By Design",
  description:
    "A luxury hospitality and culture house where exceptional taste meets intentional experience. Dining. Culture. Power.",
  keywords: [
    "Titanium Prime",
    "luxury steakhouse",
    "private members club",
    "hospitality",
    "culture",
  ],
  openGraph: {
    title: "Titanium Prime | Rare By Design",
    description:
      "A luxury hospitality and culture house where exceptional taste meets intentional experience.",
    type: "website",
  },
  icons: {
    icon: "/images/logo/sidelogo.png",
    apple: "/images/logo/sidelogo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-tp-black">{children}</body>
    </html>
  );
}
