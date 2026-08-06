import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/sections/CardGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Tüm Kaynaklar | STEM başarısını hızlandırın",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Kaynaklar"
        description="Ücretsiz profesyonel yazılımdan öğretmen rehberlerine, eğitimlere ve sınıf kitlerine kadar kaynaklarımız yarışmayı erişilebilir ve ödüllendirici kılar."
        theme="black"
        image={images.resources1}
        imageAlt="STEM Racing"
      />
      <CardGrid
        columns={3}
        items={[
          {
            title: "Öğrenme kanalı",
            description:
              "STEM Racing öğrencileri için Maaden | Aston Martin öğrenme kanalı — kaynaklar ve sektör içgörüsü.",
            href: "/unearth-your-greatness",
            ctaLabel: "İLGİ KAYDI OLUŞTUR",
            image: images.ukAboutMockups,
          },
          {
            title: "Ekipman",
            description:
              "Discovery, Primary ve Secondary için Denford kitleri ile üretim ekipmanlarına göz atın.",
            href: "https://denford.co.uk/products?type=f1-in-schools&page=1",
            ctaLabel: "EKİPMAN SATIN ALIN",
            image: images.denfordTile,
          },
          {
            title: "İndirmeler",
            description:
              "Yarışma ekipleri için çıkartmalar, ölçüm aparatları, üretim dosyaları ve uyumluluk grafikleri.",
            href: "/downloads",
            ctaLabel: "İndir",
            image: images.resources2,
          },
          {
            title: "Autodesk Fusion",
            description:
              "STEM Racing ekipleri için CAD/CAM yazılım erişimi ve öğretmen yolları.",
            href: "/partners/autodesk",
            ctaLabel: "AUTODESK FUSION",
            image: images.autodeskTile,
          },
          {
            title: "Ansys Student",
            description:
              "Ansys’ten CFD öğrenme kaynakları ve öğrenci takımı desteği.",
            href: "/partners/ansys",
            ctaLabel: "ANSYS STUDENT",
            image: images.ansysTile,
          },
          {
            title: "Proje yönetimi",
            description:
              "PMIEF ile hazırlanan 2026 Proje Yönetimi El Kitabı’nı indirin.",
            href: "/partners/pmief",
            ctaLabel: "PROJE YÖNETİMİ EL KİTABI",
            image: images.pmiefTile,
          },
          {
            title: "Dünya Finalleri 2026 Regülasyonları",
            description:
              "Aramco STEM Racing Dünya Finalleri 2026 teknik ve yarışma regülasyonları.",
            href: "/aramco-stem-racing-world-finals-2026",
            ctaLabel: "Teknik",
            image: images.wfHero,
          },
          {
            title: "Yapay zekâ rehberi",
            description:
              "STEM Racing proje çalışmalarında yapay zekâ araçlarının sorumlu kullanımı için rehberlik.",
            href: "/news",
            ctaLabel: "YZ rehberi",
            image: images.news4,
          },
        ]}
      />
      <JoinTheRace />
    </>
  );
}
