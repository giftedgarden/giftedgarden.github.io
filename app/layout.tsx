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
      "Small-group family home child care for children from birth through age 5 in Lomita Village, San Diego, led by an experienced provider with an M.S. in Early Childhood Education.",
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "Small-group family home child care where every child is known, serving birth through age 5 in Lomita Village, San Diego.",
      images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Gifted Garden — Small-group child care where every child is known. Lomita Village, San Diego." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "Small-group family home child care where every child is known, serving birth through age 5 in Lomita Village, San Diego.",
      images: ["/og-v2.png"],
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
