import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Gönüllüler | Bugün fark yaratın",
  path: "/get-involved/volunteer",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Gönüllüler için"
        description="Jüri, kolaylaştırıcı veya yarış asistanı olarak zamanınızı ayırın; etkinliklerimize destek olun."
        theme="black"
        cta={{ label: "Hemen başlayın", href: "/contact" }}
        image={images.involveVolunteers}
      />
      <FeatureGrid
        title="Neden STEM Racing’de gönüllü olmalısınız?"
        theme="light-bold"
        features={[
          { title: "Fark yaratın", description: "Yarışmaya katılan gençlerin inanılmaz beceri ve yeteneklerini yakından görün." },
          { title: "Esnek taahhüt", description: "Programınıza uygun olacak şekilde dilediğiniz kadar zaman ayırın." },
          { title: "Uzmanlığınızı paylaşın", description: "Sektör veya eğitim deneyiminizi yüksek enerjili bir etkinlik ortamına taşıyın." },
        ]}
      />
      <SplitContent
        title="Kazanımlar"
        description="STEM Racing’de gönüllülük, ödüllendirici fırsatlar sunar."
        bullets={["Gençlere ilham verin ve motive edin","Etkinliklere göre esnek zaman ayırın","Küresel STEM topluluğunun parçası olun"]}
        cta={{ label: "HEMEN BAŞLAYIN", href: "/contact" }}
        image={images.homeJourney}
        theme="black-bold"
      />
      <QuoteBand quote="Bir öğrencinin neler yapabileceğini fark ettiği anı izlemek, son derece ödüllendirici bir deneyim." attribution="STEM Racing gönüllüsü" />
      <SplitContent
        title="Bilginizi paylaşın"
        description="Öğrencilerin bilim, teknoloji, mühendislik ve matematiği gerçek dünya sorunlarına uygulamasına destek olun."
        image={images.involveVolunteers}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
