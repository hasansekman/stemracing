import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { SplitContent } from "@/components/ui/SplitContent";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Etkimiz | STEM Racing'e katılın",
  path: "/our-impact",
});

export default function OurImpactPage() {
  return (
    <>
      <Hero
        title="Etkimiz"
        description="STEM Racing 2000 yılında tek bir amaçla kuruldu: mühendislik eğitimini hayata geçirmek. Bugün de aynısını yapıyor — her yıl, her kıtada binlerce öğrenciye dokunuyor."
        theme="black"
        image={images.impactHero}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Küresel erişim",
            description:
              "65 ülkede aktif olan ve yılda 29.000’den fazla okula ulaşan STEM Racing, gerçek anlamda uluslararası bir harekettir.",
          },
          {
            title: "Engelleri kaldırıyoruz",
            description:
              "Erişim engellerini nerede bulursak orada kaldırıyoruz — okullar, kıtalar ve öğrenme düzeyleri boyunca büyüyoruz.",
          },
          {
            title: "Kapsayıcı ve adil",
            description:
              "Cinsiyet dengesinden coğrafi erişime kadar, her öğrenciye kapı açan deneyimler tasarlıyoruz.",
          },
        ]}
      />
      <StatsRow
        stats={[
          { value: "29.000+", label: "yılda etkilenen okul" },
          { value: "11", label: "destek veren Formula 1® takımı" },
          { value: "65", label: "ülke" },
          { value: "2", label: "ücretsiz yazılım partneri" },
          { value: "%35", label: "kadın katılım oranı" },
          { value: "2", label: "burs sağlayan üniversite" },
        ]}
      />
      <SplitContent
        title="Küresel bir topluluk"
        description="Asya’dan Afrika’ya, Avrupa’dan Orta Doğu’ya STEM Racing kıtaları ve kültürleri birleştirir. 60’tan fazla ülkedeki eğitimci ve öğrenen topluluğumuz yeniliğe tutkuyla bağlıdır."
        image={images.impactCommunity}
        theme="black-bold"
      />
      <SplitContent
        title="Sınıftan piste"
        description="Formula 1 desteğiyle STEM Racing; paddock erişimi, pit lane yürüyüşleri, garaj turları ve motorsport dünyasına doğrudan temas gibi parayla alınamayacak deneyimler sunar."
        image={images.impactTrack}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
