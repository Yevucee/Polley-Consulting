import type { Metadata } from "next";
import "./globals.css";
import { brand } from "./siteAssets";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yevucee.github.io/Polley-Consulting";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samuel Polley | Investigator, journalist, cultural intelligence",
    template: "%s · Samuel Polley",
  },
  description:
    "Investigative research, field intelligence and cultural insight across Africa, Europe and elsewhere.",
  icons: {
    icon: [
      { url: brand.favicon, type: "image/svg+xml" },
      { url: brand.favicon32, sizes: "32x32", type: "image/png" },
    ],
    apple: brand.appleTouchIcon,
  },
  openGraph: {
    type: "website",
    title: "Samuel Polley | The story changes when you get closer",
    description:
      "Investigator, journalist and cultural intelligence adviser. Fieldwork, private intelligence and stories that change the room.",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "Samuel Polley | The story changes when you get closer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Polley | The story changes when you get closer",
    description: "Investigator, journalist and cultural intelligence adviser.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
