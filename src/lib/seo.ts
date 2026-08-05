import type { Metadata } from "next";
import { siteConfig } from "@/lib/nav";

const defaultOgImage =
  "https://static1.squarespace.com/static/68b858da4556365ec586dae9/t/68c053f05845273363755872/1757434864914/STEM+OG+Image.jpg?format=1500w";

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = defaultOgImage,
  noIndex = false,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const ogTitle = absoluteTitle ? title : `${title} — ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 600,
          alt: title,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
