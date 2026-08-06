import { Hero } from "@/components/ui/Hero";
import { SplitContent } from "@/components/ui/SplitContent";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Autodesk | CAD araçlarını keşfedin",
  path: "/partners/autodesk",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Autodesk"
        description="Autodesk Fusion, öğrenci ve öğretmenlere tasarım ve üretim için bulut tabanlı bir CAD/CAM platformu sunar."
        theme="black"
        image={images.autodeskTile}
        imageAlt="Autodesk"
      />
      <FeatureGrid
        title="Autodesk Fusion nedir?"
        theme="black-bold"
        features={[
          {
            title: "Öğrenci erişimi",
            description:
              "Eğitim lisansları, profesyonel tasarım araçlarını her ekibin eline ulaştırır.",
          },
          {
            title: "Öğretmen erişimi",
            description:
              "Fusion Fundamentals üzerinden ücretsiz CPD kursları sınıf özgüvenini artırır.",
          },
        ]}
        columns={2}
      />
      <SplitContent
        title="Öğretmenler için ücretsiz CPD kursları"
        description="STEM Racing eğitimcilerine özel canlı çevrim içi CAD ve CAM kursları olan Fusion Fundamentals’ı keşfedin."
        cta={{
          label: "Kursları keşfedin",
          href: "/fusion-fundamentals",
          external: false,
        }}
        image={images.autodeskTile}
        theme="light-bold"
      />
      <JoinTheRace />
    </>
  );
}
