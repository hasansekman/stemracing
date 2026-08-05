import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Sponsorlar | Bugün etki yaratın",
  path: "/get-involved/sponsor",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Sponsorlar için"
        description="Kâr amacı gütmeyen bir kuruluş olarak STEM Racing’in finansmanı ve geleceği, sizin gibi kişi ve kurumların desteğine bağlıdır."
        theme="black"
        cta={{ label: "Hemen başlayın", href: "/contact" }}
        image={images.involveSponsors}
      />
      <FeatureGrid
        title="Neden STEM Racing’i sponsorlamalısınız?"
        theme="light-bold"
        features={[
          { title: "Geleceği finanse edin", description: "Dünya çapında öğrencilere olağanüstü STEM deneyimleri sunmamızı sağlayın." },
          { title: "Kademeli seçenekler", description: "Bölgesel, ulusal veya küresel düzeyde özel ortaklık paketleriyle destek olun." },
          { title: "Yeni nesille bağlantı", description: "Markanızı geleceğin mühendisleri, yenilikçileri ve liderleriyle buluşturun." },
        ]}
      />
      <SplitContent
        title="Güçlü bir kurumsal sosyal sorumluluk fırsatı"
        description="STEM Racing’i sponsorlamak yalnızca bir yarışmayı desteklemek değil — anlamlı küresel etki demektir."
        bullets={["Bölgesel etkinlik desteğiyle yerel kalın","Ülke çapında görünürlük için ulusal olun","Dünya Finalleri ortaklıklarıyla küresel olun"]}
        cta={{ label: "HEMEN BAŞLAYIN", href: "/contact" }}
        image={images.partnersHero}
        theme="black-bold"
      />
      <QuoteBand quote="Sektöre hazır CFD becerileri öğrenen gençlere ulaşmak için STEM Racing bizim için mükemmel bir partner oldu." attribution="Sektör partneri" />
      <SplitContent
        title="Etki yaratın"
        description="STEM Racing ile ortaklık kurun; geleceğin mühendislerine, yenilikçilerine ve problem çözücülerine güç katın."
        image={images.involveSponsors}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
