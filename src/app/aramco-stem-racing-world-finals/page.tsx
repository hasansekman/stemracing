import { Hero } from "@/components/ui/Hero";
import { StatsRow } from "@/components/sections/StatsRow";
import { SplitContent } from "@/components/ui/SplitContent";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Aramco STEM Racing Dünya Finalleri 2025",
  path: "/aramco-stem-racing-world-finals",
});

export default function WorldFinals2025Page() {
  return (
    <>
      <Hero
        title="Aramco STEM Dünya Finalleri 2025"
        description="Yarışmanın zirvesi: 30’dan fazla ülkeden 400’ü aşkın katılımcı, dünya şampiyonu unvanı için Singapur’da yarıştı."
        theme="black"
        image={images.wfHero}
      />
      <SplitContent
        title="Yirmi yıllık Dünya Finalleri"
        description="Bu yılki yarışma, Dünya Finalleri’nin yirminci yılını ve STEM Racing adıyla ilk kez düzenlenişini kutladı. Singapur’da hem geçmişimizi hem geleceğimizi birlikte andık."
        image={images.wfSingapore}
        theme="black"
      />
      <StatsRow
        stats={[
          { value: "672", label: "katılımcı" },
          { value: "10", label: "Formula 1 takımı stajı" },
          { value: "34", label: "yarışan ülke" },
          { value: "1", label: "tam burs ödülü" },
          { value: "25", label: "kazanılan ödül" },
          { value: "20", label: "Formula 1 garaj turu" },
        ]}
      />
      <Section theme="black-bold" className="py-16">
        <Container>
          <FadeIn>
            <h2 className="mb-6">Öne çıkanları izleyin</h2>
            <div className="aspect-video bg-brand-dark border border-white/10 flex items-center justify-center">
              <p className="opacity-80">Etkinlik özet videosu yakında</p>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <SplitContent
        title="Canlı denetim"
        description="Hassasiyet her şeydir — milimetreler önemlidir, miligramlar sayılır; hazırlık jüri standartlarıyla buluşur."
        image={images.wfScrutineering}
        theme="light-bold"
      />
      <SplitContent
        title="Dört şeritli yarış"
        description="Pistin baştan tasarlanması dört şeritli yarışı getirdi — yarı zamanda iki katı aksiyon."
        image={images.wfRacing}
        theme="white-bold"
        reverse
      />
      <SplitContent
        title="Dünya şampiyonları"
        description="Avustralya’dan beş kişilik Lunar ekibi, tasarım ve mühendislikte üstün performans göstererek unvanı kazandı."
        image={images.wfChampions}
        theme="light-bold"
      />
      <SplitContent
        title="STEM Racing yıldızları"
        description="Öğrenciler Formula 1 kahramanlarıyla buluştu ve unutulmaz paddock anları yaşadı."
        image={images.wfStars}
        theme="white-bold"
        reverse
      />
      <SplitContent
        title="Teşekkürler Singapur"
        description="Muhteşem Singapur manzarasında etkinlik, ömür boyu sürecek anılar bıraktı."
        image={images.wfSingapore}
        theme="light-bold"
      />
      <JoinTheRace />
    </>
  );
}
