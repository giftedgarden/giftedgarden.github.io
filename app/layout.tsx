import type { Metadata } from "next";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const origin = new URL("https://giftedgarden.github.io");

  return {
    metadataBase: origin,
    title: "Gifted Garden Child Care | Lomita Village, San Diego",
    description:
      "Small-group family home child care for children from birth through age 5 in Lomita Village, San Diego, led by an experienced provider with an M.S. in Early Childhood Education.",
    robots: { index: false, follow: false },
    icons: {
      icon: "/brand/gifted-garden-elephant.png",
      apple: "/brand/gifted-garden-elephant.png",
    },
    openGraph: {
      type: "website",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "Gifted Garden: Where every child blooms. Small-group family home child care serving birth through age 5 in Lomita Village, San Diego.",
      images: [{ url: "/og-brand.webp", width: 1200, height: 630, alt: "Gifted Garden Childcare Service — Where Every Child Blooms. Lomita Village, San Diego." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gifted Garden Child Care | Lomita Village, San Diego",
      description: "Gifted Garden: Where every child blooms. Small-group family home child care serving birth through age 5 in Lomita Village, San Diego.",
      images: ["/og-brand.webp"],
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
