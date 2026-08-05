import { Hero } from "@/components/ui/Hero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { newsPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Haberler ve Yazılar",
  description:
    "STEM Racing’den en güncel haberler, ortaklıklar, mezun hikâyeleri ve yarışma duyuruları.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <Hero title="Haberler ve yazılar" theme="black-bold" />
      <BlogGrid posts={newsPosts} basePath="/news" />
    </>
  );
}
