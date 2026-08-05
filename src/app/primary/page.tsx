import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Primary (9-11) | STEM Racing'e katılın",
  path: "/primary",
});

export default function PrimaryPage() {
  return (
    <>
      <Hero
        title="STEM Racing Primary"
        description="9–11 yaşındaki öğrencileri STEM konularıyla en sürükleyici yolla tanıştırmak için geliştirildi — minyatür bir kâğıt araç tasarlayarak gerçek bir eğitim deneyimi."
        theme="black"
        image={images.primary1}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Etkileşimli öğrenme",
            description:
              "Öğrenciler kendi araçlarını tasarlar, test eder, üretir ve yarıştırır; itki gibi karmaşık kavramları hayata geçirir.",
          },
          {
            title: "Öğretim kaynakları",
            description:
              "Sınıfta uygulamayı basit ve etkili kılan sürükleyici bir çalışma programı.",
          },
          {
            title: "Eğlence dolu etkinlikler",
            description:
              "İsteğe bağlı bölgesel etkinlikler, sınıf projelerini unutulmaz yarışma günlerine dönüştürür.",
          },
        ]}
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container>
          <FadeIn className="mb-10">
            <h2>Nasıl işler?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeIn>
              <h4 className="mb-3">Neler içeriyor?</h4>
              <p className="opacity-90">
                3–6 kişilik ekipler kendi kâğıt araçlarını tasarlar, üretir; ardından
                markalaşma ve yarış stratejisi geliştirir.
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h4 className="mb-3">Ekipman ve kaynaklar</h4>
              <p className="opacity-90">
                Düşük maliyetli başlangıç paketi gereken her şeyi içerir —
                özel ekipmana gerek yoktur.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h4 className="mb-3">Yarışma seviyeleri</h4>
              <p className="opacity-90">
                Sınıf uygulaması; isteğe bağlı bölgesel yarışma yolu ile
                desteklenebilir.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>
      <QuoteBand
        quote="Bu projeyi çok sevdik. STEM hakkında çok şey öğrendik, ekip çalışmamızı ve teknik becerilerimizi geliştirdik, yarışmada harika vakit geçirdik!"
        attribution="Maeve, 9 yaşında, Ohio Lightning Racoons"
      />
      <SplitContent
        title="Esnek bir program"
        description="Tamamen sınıfta uygulayın veya yarışma fırsatlarıyla bir adım öteye taşıyın."
        cta={{ label: "Hemen başlayın", href: "/contact", external: false }}
        image={images.primary2}
        theme="white-bold"
      />
      <SplitContent
        title="Uygun maliyetli ekipman"
        description="Tüm okullar için erişilebilir ve uygun maliyetli olacak şekilde tasarlandı."
        cta={{
          label: "BAŞLANGIÇ PAKETİNİ SATIN ALIN",
          href: "https://denford.co.uk/shop/stem-racing-primary-class-group-starter-pack-makes-50-cars",
          external: true,
        }}
        image={images.primary3}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
