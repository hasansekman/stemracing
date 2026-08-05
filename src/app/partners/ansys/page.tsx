import { Hero } from "@/components/ui/Hero";
import { SplitContent } from "@/components/ui/SplitContent";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Ansys | CFD araçlarını keşfedin",
  path: "/partners/ansys",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Ansys"
        description="Öğrenciler Ansys araçlarıyla hava akışını analiz eder, tasarımlarını geliştirir ve gerçek CFD becerileri kazanır."
        theme="black"
      />
      <FeatureGrid
        title="Neden Ansys?"
        theme="black-bold"
        features={[
          {
            title: "Öğrenci erişimi",
            description:
              "Akademik erişim yolları, ekiplerin araç performansını simüle edip iyileştirmesine yardımcı olur.",
          },
          {
            title: "Sektör güvenilirliği",
            description:
              "Havacılık, otomotiv ve motorsportta güvenilen yazılımlarla öğrenin.",
          },
        ]}
        columns={2}
      />
      <SplitContent
        title="Faydalı kaynaklar"
        description="Ansys’in STEM Racing öğrenme yollarını ve öğrenci takımı kaynaklarını keşfedin."
        cta={{
          label: "Kaynakları görüntüle",
          href: "https://innovationspace.ansys.com/",
          external: true,
        }}
        image={images.ansysTile}
        theme="light-bold"
      />
      <JoinTheRace />
    </>
  );
}
