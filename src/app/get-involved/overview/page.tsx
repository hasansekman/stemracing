import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CardGrid } from "@/components/sections/CardGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Katılın | STEM Racing'e dahil olun",
  path: "/get-involved/overview",
});

export default function GetInvolvedOverviewPage() {
  return (
    <>
      <Hero
        title="Katılın"
        description="Kim olursanız olun, nerede olursanız olun STEM Racing’in bir parçası olabilirsiniz. Birlikte geleceği hızlandıralım."
        theme="black"
        image={images.involveHero}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Gelecek nesle ilham verin",
            description:
              "Gençlerin STEM’de başarılı olmak için ihtiyaç duyduğu özgüveni ve becerileri kazanmasına yardımcı olun.",
          },
          {
            title: "Küresel bir hareketin parçası olun",
            description:
              "Yerel etkinliklerde gönüllülükten küresel yarışmaları desteklemeye kadar katkınız fark yaratır.",
          },
          {
            title: "Geleceği birlikte şekillendirin",
            description:
              "Eğitimciler, sektör ve topluluklarla iş birliği yaparak STEM kariyerlerine giden yolları açın.",
          },
        ]}
      />
      <CardGrid
        columns={4}
        items={[
          {
            title: "Öğretmenler",
            description:
              "Birçok ulusal müfredatla uyumlu, sınıf kaynakları ve öğretim araçlarıyla dolu düşük maliyetli bir program.",
            href: "/get-involved/teacher",
            image:
              images.involveTeachers,
          },
          {
            title: "Öğrenciler",
            description:
              "Ekibinizi kurun, aracınızı tasarlayın ve dünyanın önde gelen STEM motorsport meydan okumasında geleceğinizi şekillendirin.",
            href: "/get-involved/student",
            image:
              images.involveStudents,
          },
          {
            title: "Gönüllüler",
            description:
              "Jüri, kolaylaştırıcı veya yarış asistanı olarak etkinliklere destek olun; deneyiminizi gelecek nesille paylaşın.",
            href: "/get-involved/volunteer",
            image:
              images.involveVolunteers,
          },
          {
            title: "Sponsorlar",
            description:
              "Kâr amacı gütmeyen STEM Racing; erişimi, etkinlikleri ve fırsatları finanse eden partnerlere ihtiyaç duyar.",
            href: "/get-involved/sponsor",
            image:
              images.involveSponsors,
          },
        ]}
      />
      <JoinTheRace />
    </>
  );
}
