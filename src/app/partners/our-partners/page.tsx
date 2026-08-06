import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/sections/CardGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Partnerlerimiz | Bizimle ortak olun",
  path: "/partners/our-partners",
});

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Partnerler"
        description="Partnerlerimiz yalnızca bir yarışmayı desteklemez. Fırsatlar yaratır, yollar açar ve STEM’in geleceğini birlikte inşa eder."
        theme="black"
        image={images.partnersHero}
        imageAlt="STEM Racing"
      />
      <Section theme="black-bold" className="py-16 md:py-20">
        <Container>
          <FadeIn className="max-w-3xl">
            <h2 className="mb-4">Her şeyi mümkün kılanlar</h2>
            <p className="opacity-90">
              Kâr amacı gütmeyen bir kuruluş olarak, olağanüstü partner ağımız
              olmadan yaptıklarımızı yapamazdık. Bu şirketler ve kurumlar bizi
              sayısız yolla destekliyor.
            </p>
          </FadeIn>
        </Container>
      </Section>
      <CardGrid
        title="Kimlerle çalışıyoruz?"
        description="Formula 1’den PMIEF’e, Autodesk’ten Ansys’e — sektörün en iyileriyle ortaklık yapmaktan gurur duyuyoruz."
        columns={3}
        items={[
          {
            title: "Ansys",
            image: images.ansysTile,
            description:
              "Öğrencilerin aerodinamik performansı analiz edip geliştirmesine yardımcı olan lider CFD araçları.",
            href: "/partners/ansys",
          },
          {
            title: "Autodesk",
            image: images.autodeskTile,
            description:
              "Tasarım, üretim ve öğretmen CPD’si için Autodesk Fusion’a ücretsiz eğitim erişimi.",
            href: "/partners/autodesk",
          },
          {
            title: "Denford",
            image: images.denfordTile,
            description:
              "Ekipman, üretim yolları ve sınıf kitleri sağlayan kurucu partner.",
            href: "/partners/denford",
          },
          {
            title: "Formula 1",
            image: images.f1Tile,
            description:
              "Sınıfları dünyanın en heyecan verici motorsportuyla buluşturan resmi destek.",
            href: "https://corp.formula1.com/",
            ctaLabel: "Daha fazla bilgi",
          },
          {
            title: "PMIEF",
            image: images.pmiefTile,
            description:
              "Hayat boyu beceriler kazandıran proje yönetimi eğitim kaynakları.",
            href: "/partners/pmief",
          },
        ]}
      />
      <Section theme="bright" className="py-16 md:py-20">
        <Container>
          <FadeIn className="max-w-3xl">
            <h2 className="mb-4">
              Gelecek nesle ilham vermek için bize katılmaya hazır mısınız?
            </h2>
            <p className="mb-8 opacity-90">
              Misyonumuzu paylaşan kurumlarla yeni iş birliklerine her zaman
              açığız.
            </p>
            <Button href="/contact" variant="secondary">
              Partner olun
            </Button>
          </FadeIn>
        </Container>
      </Section>
      <JoinTheRace />
    </>
  );
}
