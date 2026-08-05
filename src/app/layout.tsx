import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/nav";
import "./globals.css";

const heading = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const body = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#05000b" },
    { media: "(prefers-color-scheme: dark)", color: "#05000b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
    absoluteTitle: true,
  }),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  keywords: [
    "STEM Racing",
    "STEM Racing Türkiye",
    "STEM eğitimi",
    "Formula 1 eğitimi",
    "öğrenci mühendislik yarışması",
    "STEM yarışması",
  ],
  authors: [{ name: "STEM Racing" }],
  creator: "STEM Racing",
  publisher: "STEM Racing",
  category: "education",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: "STEM Racing",
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/LOGO/brand-logo.png`,
  sameAs: [
    "https://www.instagram.com/STEMRacingHQ",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Armytage Rd",
    addressLocality: "Brighouse",
    addressRegion: "West Yorkshire",
    postalCode: "HD6 1QF",
    addressCountry: "GB",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "tr-TR",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://images.squarespace-cdn.com" />
        <link rel="dns-prefetch" href="https://images.squarespace-cdn.com" />
        <link rel="preconnect" href="https://static1.squarespace.com" />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Header />
        <main className="min-h-screen pt-[calc(30px+12vw)] min-[800px]:pt-[calc(64px+2vw)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
