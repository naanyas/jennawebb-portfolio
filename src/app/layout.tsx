import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenna Webb — Builder, Operator, Engineer",
  description:
    "Portfolio of Jenna Webb — products and platforms built across fraud-detection, live entertainment, and bar games.",
  metadataBase: new URL("https://jennawebb.co"),
  openGraph: {
    title: "Jenna Webb — Builder, Operator, Engineer",
    description:
      "Products and platforms built across fraud-detection, live entertainment, and bar games.",
    url: "https://jennawebb.co",
    siteName: "Jenna Webb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenna Webb — Builder, Operator, Engineer",
    description:
      "Products and platforms built across fraud-detection, live entertainment, and bar games.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
