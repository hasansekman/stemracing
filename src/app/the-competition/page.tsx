import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CardGrid } from "@/components/sections/CardGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Yarışma | STEM Racing'e katılın",
  path: "/the-competition",
});

export default function TheCompetitionPage() {
  return (
    <>
      <Hero
        title="Yarışma"
        description="Heyecanı eğitimle ustalıkla harmanlayan STEM Racing, öğretirken ilham veren bir yarışmadır."
        theme="black"
        image={images.competitionRacing}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Yarışarak öğrenmek",
            description:
              "Uygulamalı tasarım, mühendislik ve yarış yoluyla gerçek dünya becerilerini hayata geçiren bir proje.",
          },
          {
            title: "Her yaşa erişilebilir",
            description:
              "Discovery (6+)’den Secondary (11–19)’a kadar her aşama, yarışmayı yaratıcılıkla birleştirir.",
          },
          {
            title: "Hayat boyu beceriler",
            description:
              "Öğrenciler; mühendislik, proje yönetimi, markalaşma ve sunum becerilerini geleceğin kariyerleri için geliştirir.",
          },
        ]}
      />
      <CardGrid
        title="Kategoriler"
        description="Hangi yolu seçerlerse seçsinler, STEM Racing’in her aşaması yarışmayı yaratıcılıkla buluşturur."
        columns={3}
        items={[
          {
            title: "STEM Racing Discovery",
            description:
              "6 yaş ve üzeri için tasarım, üretim, test ve yarışı tanıtan, hepsi bir arada sınıf projesi.",
            href: "/discovery",
            ctaLabel: "Discovery’yi keşfedin",
            image:
              images.competitionDiscovery,
          },
          {
            title: "STEM Racing Primary",
            description:
              "9–11 yaş için — esnek sınıf uygulamasıyla minyatür kâğıt araçlar tasarlayın ve yarıştırın.",
            href: "/primary",
            ctaLabel: "Primary’yi keşfedin",
            image:
              images.competitionPrimary,
          },
          {
            title: "STEM Racing Secondary",
            description:
              "11–19 yaş için Entry, Development ve Professional sınıfları — Dünya Finalleri’ne uzanan yol.",
            href: "/secondary",
            ctaLabel: "Secondary’yi keşfedin",
            image:
              images.competitionSecondary,
          },
        ]}
      />
      <JoinTheRace />
    </>
  );
}
