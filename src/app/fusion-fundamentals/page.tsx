import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { AccordionFaq } from "@/components/sections/AccordionFaq";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Fusion Fundamentals | Öğretmenler",
  path: "/fusion-fundamentals",
});

const regions = [
  {
    label: "UK",
    href: "https://www.autodesk.com/uk/campaigns/education/fusion-fundamentals",
  },
  {
    label: "US",
    href: "https://www.autodesk.com/campaigns/education/fusion-fundamentals",
  },
  {
    label: "DE",
    href: "https://www.autodesk.com/de/campaigns/education/fusion-fundamentals",
  },
  {
    label: "IN",
    href: "https://www.autodesk.com/in/campaigns/education/fusion-fundamentals",
  },
];

export default function FusionFundamentalsPage() {
  return (
    <>
      <Hero
        title="Fusion Fundamentals"
        description="Autodesk ile ortaklaşa eğitimcilere ücretsiz mesleki gelişim kursları sunuyoruz — CAD ve CAM ile STEM öğrenmesini hayata geçiren uygulamalı oturumlar."
        theme="black"
        image={images.autodeskTile}
        imageAlt="Autodesk Fusion Fundamentals"
      />
      <FeatureGrid
        title="Neden Fusion Fundamentals’a kaydolmalısınız?"
        theme="light-bold"
        features={[
          {
            title: "Autodesk sertifikası",
            description:
              "Öğreniminizi Autodesk CPD sertifikasıyla belgelendirin.",
          },
          {
            title: "Sınıf kaynakları",
            description:
              "Autodesk Fusion’ı öğretecek özgüven ve kaynaklarla ayrılın.",
          },
          {
            title: "Özgüvenle öğretin",
            description:
              "İster yeni başlayan ister uzman olun, öğrencileri yönlendirecek beceriler kazanın.",
          },
        ]}
      />
      <Section theme="black-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <FadeIn>
              <h2 className="mb-4">CAD kursu</h2>
              <p className="opacity-90 mb-6">
                İki veya üç canlı çevrim içi oturumda yaklaşık 12 saatlik bir
                kurs; STEM Racing sınıfları için temel Autodesk Fusion
                araçlarını keşfeder.
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-4">CAM kursu</h2>
              <p className="opacity-90 mb-6">
                Eğitimcilerin güvenli ve özgüvenli CAM iş akışlarını öğretmesine
                yardımcı olan, STEM Racing’e özel üretim oturumları.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <p className="eyebrow mb-4">Bölgeye göre kayıt</p>
            <div className="flex flex-wrap gap-3">
              {regions.map((region) => (
                <Button
                  key={region.label}
                  href={region.href}
                  external
                  variant="secondary"
                >
                  {region.label}
                </Button>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
      <QuoteBand
        quote="Fusion Fundamentals kursundan çok sayıda yeni beceri öğrendim — öğrencilerime yazılımla tasarım ve üretimi öğretirken artık çok daha özgüvenliyim."
        attribution="Fusion Fundamentals katılımcısı"
      />
      <AccordionFaq
        theme="light-bold"
        items={[
          {
            question: "Autodesk Fusion hakkında",
            answer:
              "Autodesk Fusion; üretim, işleme, mühendislik ve endüstriyel tasarımda kullanılan bulut tabanlı bir CAD/CAM/CAE/PCB platformudur.",
          },
          {
            question: "Fusion Fundamentals kursu nedir?",
            answer:
              "Autodesk ile STEM Racing eğitimcileri için hazırlanmış giriş düzeyinde bir mesleki gelişim serisidir.",
          },
          {
            question: "Kurslar ne kadar sürer?",
            answer:
              "CAD genellikle birden fazla canlı oturumda yaklaşık 12 saat sürer. CAM kursları daha kısa, özel yoğun programlardır.",
          },
          {
            question: "Sertifika alacak mıyım?",
            answer:
              "Evet — katılımcılar tamamladıklarında Autodesk CPD sertifikası alabilir.",
          },
          {
            question: "Oturumlar canlı mı, kayıtlı mı?",
            answer:
              "Oturumlar canlı çevrim içidir. Kayıtların paylaşımı ilgili döneme göre değişebilir.",
          },
        ]}
      />
      <JoinTheRace />
    </>
  );
}
