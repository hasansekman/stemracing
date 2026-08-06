import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
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
    image: images.secondary1,
  },
  {
    theme: "white-bold" as const,
    title: "Development Class (11–19 yaş)",
    subtitle: "Bir üst vites",
    description:
      "Development Class, öğrencileri teknik yeniliğe daha fazla iter; aerodinamik ve performans anlayışını sınamak için kanat tasarımını ekler.",
    image: images.secondary2,
  },
  {
    theme: "light-bold" as const,
    title: "Professional Class (11–19 yaş)",
    subtitle: "Yenilik ile hırsın buluştuğu yer",
    description:
      "Secondary bölümünün en ileri aşaması olan Professional Class, ayrıntılı teknik regülasyonlar çerçevesinde neredeyse tam tasarım özgürlüğü sunar.",
    image: images.secondary3,
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
        imageAlt="STEM Racing Secondary"
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
      {classes.map((item, index) => (
        <SplitContent
          key={item.title}
          title={item.title}
          description={`${item.subtitle}. ${item.description}`}
          image={item.image}
          imageAlt={item.title}
          theme={item.theme}
          reverse={index % 2 === 1}
          cta={{ label: "Hemen başlayın", href: "/contact" }}
        />
      ))}
      <JoinTheRace />
    </>
  );
}
