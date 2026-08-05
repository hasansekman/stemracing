import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/nav";
import { newsPosts, successStories } from "@/data/blog";

const staticRoutes = [
  "/",
  "/about-us",
  "/our-impact",
  "/successstories",
  "/the-competition",
  "/discovery",
  "/primary",
  "/secondary",
  "/aramco-stem-racing-world-finals",
  "/aramco-stem-racing-world-finals-2026",
  "/get-involved/overview",
  "/get-involved/teacher",
  "/get-involved/student",
  "/get-involved/volunteer",
  "/get-involved/sponsor",
  "/findus",
  "/partners/our-partners",
  "/partners/ansys",
  "/partners/autodesk",
  "/partners/denford",
  "/partners/pmief",
  "/resources",
  "/downloads",
  "/fusion-fundamentals",
  "/news",
  "/donate",
  "/contact",
  "/newsletter-signup",
  "/privacy-policy",
  "/cookie-policy",
  "/global-platform-tender",
  "/unearth-your-greatness",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const news = newsPosts.map((post) => ({
    url: `${siteConfig.url}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const stories = successStories.map((post) => ({
    url: `${siteConfig.url}/successstories/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...news, ...stories];
}
