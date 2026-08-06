import { Hero } from "@/components/ui/Hero";
import { StatsRow } from "@/components/sections/StatsRow";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Aramco STEM Racing Dünya Finalleri 2026",
  path: "/aramco-stem-racing-world-finals-2026",
});

export default function WorldFinals2026Page() {
  return (
    <>
      <Hero
        title="Aramco STEM Racing Dünya Finalleri 2026"
        description="3–8 Ekim 2026 · Resorts World Sentosa, Singapur"
        theme="black"
        image={images.wfSingapore}
      />
      <SplitContent
        title="Sevdiğimiz bir destinasyona dönüş"
        description="Aramco STEM Racing Dünya Finalleri 2026, şimdiye kadarki en büyük etkinliğimiz olmaya aday — yetenek, ekip çalışması ve küresel STEM vizyonunun kutlaması."
        image={images.wfHero}
        theme="black"
      />
      <StatsRow
        stats={[
          { value: "830+", label: "katılımcı" },
          { value: "1", label: "planlanan özel lansman" },
          { value: "35+", label: "yarışacak ülke" },
          { value: "1", label: "verilecek tam burs" },
          { value: "20+", label: "kazanılacak ödül" },
          { value: "11", label: "destekleyen Formula 1® takımı" },
        ]}
      />
      <Section theme="black-bold" className="py-16">
        <Container>
          <FadeIn>
            <h2 className="mb-6">2025’ten öne çıkanlar</h2>
            <VideoEmbed
              title="Aramco STEM Racing Dünya Finalleri özet videosu"
              youtubeId="OdR7ytBk2Gk"
            />
          </FadeIn>
        </Container>
      </Section>
      <SplitContent
        title="Dünyanın en iyileri"
        description="Ekim’de 13–19 yaş arası, dünyanın en parlak 500’den fazla genci; Formula 1 takvimiyle yan yana yarışmak için Singapur’a gelecek."
        image={images.wfRacing}
        theme="light-bold"
      />
      <QuoteBand
        quote="Singapur’a varmak ekipler için yeni, heyecan verici ve belki biraz da ürkütücü olacak; ama hepsinin yüzünde kocaman gülümsemelerle ve ömür boyu sürecek anılarla döneceğini biliyorum."
        attribution="STEM Racing Yönetimi"
      />
      <SplitContent
        title="Hayat değiştiren bir deneyim"
        description="Bir sonraki dünya şampiyonlarını ararken Aramco STEM Racing Dünya Finalleri yalnızca kupa kazanmakla ilgili değil — fırsat, dostluk ve kariyer ilhamı demek."
        image={images.wfScrutineering}
        theme="white-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
