import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", siteUrl).toString();

  return {
    title: {
      default: "Samuel Polley — Investigator, journalist, cultural intelligence",
      template: "%s · Samuel Polley",
    },
    description:
      "Investigative research, field intelligence and cultural insight across Africa, Europe and the spaces between.",
    metadataBase: siteUrl,
    openGraph: {
      type: "website",
      title: "Samuel Polley — The story changes when you get closer",
      description:
        "Investigator, journalist and cultural intelligence adviser. Fieldwork, private intelligence and stories that change the room.",
      images: [{ url: socialImage, width: 1732, height: 908, alt: "Samuel Polley — The story changes when you get closer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Samuel Polley — The story changes when you get closer",
      description: "Investigator, journalist and cultural intelligence adviser.",
      images: [socialImage],
    },
  };
}

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
