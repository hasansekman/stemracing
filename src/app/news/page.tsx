import { Hero } from "@/components/ui/Hero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { newsPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Haberler ve Yazılar",
  description:
    "STEM Racing’den en güncel haberler, ortaklıklar, mezun hikâyeleri ve yarışma duyuruları.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <Hero
        title="Haberler ve yazılar"
        theme="black-bold"
        image={images.news1}
        imageAlt="STEM Racing haberleri"
      />
      <BlogGrid posts={newsPosts} basePath="/news" />
    </>
  );
}
