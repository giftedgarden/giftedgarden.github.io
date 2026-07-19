import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = new URL(`${protocol}://${host}`);

  return {
    metadataBase: origin,
    title: "Gifted Garden Child Care | Lomita Village, San Diego",
    description:
      "Explore the Gifted Garden child-care prototype for families in Lomita Village, San Diego, and find the right next enrollment step.",
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "A warm, practical path for families exploring child care in Lomita Village, San Diego.",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Gifted Garden — Care that helps every child grow. Lomita Village, San Diego." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "A warm, practical path for families exploring child care in Lomita Village, San Diego.",
      images: ["/og.png"],
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
