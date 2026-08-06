import { Hero } from "@/components/ui/Hero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { successStories } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Başarı Hikâyeleri",
  description:
    "STEM Racing sınıflarından Formula 1, mühendislik ve ötesindeki kariyerlere uzanan mezun yolculukları.",
  path: "/successstories",
});

export default function SuccessStoriesPage() {
  return (
    <>
      <Hero
        title="Başarı hikâyelerimiz"
        description="Öğrencilerin hayallerindeki kariyerleri görmesini sağlayan ve bu rollere giden yolda onları hızlandıran STEM Racing, öğrenci gelişiminin katalizörüdür."
        theme="black"
        image={images.ukSuccessLewisFowler}
        imageAlt="STEM Racing başarı hikâyeleri"
      />
      <BlogGrid posts={successStories} basePath="/successstories" />
      <JoinTheRace />
    </>
  );
}
