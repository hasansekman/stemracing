import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Secondary (11-19) | STEM Racing'e katılın",
  path: "/secondary",
});

const classes = [
  {
    theme: "light-bold" as const,
    title: "Entry Class (11–14 yaş)",
    subtitle: "Mükemmel başlangıç",
    description:
      "Entry Class, STEM Racing’e yeni başlayan öğrenciler için ideal giriş noktasıdır. Yarışmanın temel unsurlarını tanıtır: Tasarım, Analiz, Test, Üretim, Yarış.",
  },
  {
    theme: "white-bold" as const,
    title: "Development Class (11–19 yaş)",
    subtitle: "Bir üst vites",
    description:
      "Development Class, öğrencileri teknik yeniliğe daha fazla iter; aerodinamik ve performans anlayışını sınamak için kanat tasarımını ekler.",
  },
  {
    theme: "light-bold" as const,
    title: "Professional Class (11–19 yaş)",
    subtitle: "Yenilik ile hırsın buluştuğu yer",
    description:
      "Secondary bölümünün en ileri aşaması olan Professional Class, ayrıntılı teknik regülasyonlar çerçevesinde neredeyse tam tasarım özgürlüğü sunar.",
  },
];

export default function SecondaryPage() {
  return (
    <>
      <Hero
        title="STEM Racing Secondary"
        description="STEM Racing Secondary, 11–19 yaşındaki öğrencileri daha büyük düşünmeye, daha akıllı çalışmaya ve fikirlerini daha ileri taşımaya davet eder — gerçek dünya STEM kariyerleri ve küresel tanınırlık için hazırlar."
        theme="black"
        image={images.secondary1}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Kademeli öğrenme",
            description:
              "Entry, Development ve Professional olmak üzere üç sınıfla öğrenciler kendi temposunda başlangıçtan uzmanlığa ilerler.",
          },
          {
            title: "Gerçek dünya becerileri",
            description:
              "CAD, CFD, üretim, markalaşma, proje yönetimi ve sunum becerileri sektör pratiğini yansıtır.",
          },
          {
            title: "Küresel sahne",
            description:
              "En iyi ekipler bölgesel etkinliklerden ulusal finallere ve Aramco STEM Racing Dünya Finalleri’ne yükselir.",
          },
        ]}
      />
      {classes.map((item) => (
        <Section key={item.title} theme={item.theme} className="py-16 md:py-24">
          <Container>
            <FadeIn className="max-w-3xl mb-10">
              <h2 className="mb-3">{item.title}</h2>
              <p className="font-meta text-lg mb-4 opacity-80">{item.subtitle}</p>
              <p className="opacity-90 mb-8">{item.description}</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  t: "Neler içeriyor?",
                  d: "İş birliği içinde bir ekip olarak tasarlayın, analiz edin, üretin, markalaştırın ve yarışın.",
                },
                {
                  t: "Ekipman ve yazılım",
                  d: "Autodesk ve Ansys’in ücretsiz endüstri araçlarına erişin; yarışma donanımı yollarını keşfedin.",
                },
                {
                  t: "Yarışma seviyeleri",
                  d: "Bölgeselden ulusala etkinlikler; en iyi ekipler için Dünya Finalleri elemesi.",
                },
              ].map((block, i) => (
                <FadeIn key={block.t} delay={i * 0.05}>
                  <h4 className="mb-3">{block.t}</h4>
                  <p className="opacity-90">{block.d}</p>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <Button href="/contact">Hemen başlayın</Button>
            </FadeIn>
          </Container>
        </Section>
      ))}
      <JoinTheRace />
    </>
  );
}
