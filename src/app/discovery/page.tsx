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
  title: "Discovery (6+) | STEM yolculuğunuza başlayın",
  path: "/discovery",
});

export default function DiscoveryPage() {
  return (
    <>
      <Hero
        title="STEM Racing Discovery"
        description="6 yaş ve üzeri için uygun, hepsi bir arada sınıf projesi. Öğrencileri sürükleyici ve etkileşimli bir formatla tasarım, test, üretim ve yarışa tanıtır."
        theme="black"
        image={images.discovery1}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Hepsi bir arada proje",
            description:
              "Programı yürütmek için gereken her şey, yüksek kaliteli ve kolay saklanan tek bir kutuda.",
          },
          {
            title: "Çalışma üniteleri",
            description:
              "Öğrencileri ekip çalışması, markalaşma, aerodinamik, tasarım ve analiz boyunca yönlendiren yapılandırılmış sınıf etkinlikleri.",
          },
          {
            title: "Sınıf etkinliği",
            description:
              "Bireysel, ikili veya küçük ekip öğrenmesi için ideal; hızlı kurulum ve net öğretmen desteği.",
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
                Öğrenciler eğlenceli ve pratik bir yolla STEM ilkelerini
                uygularken tasarlar, üretir, test eder ve yarışır.
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h4 className="mb-3">Ekipman ve kaynaklar</h4>
              <p className="opacity-90">
                Açılır yarış pisti ve hazır kaynaklarla öğretmenler hızla
                başlayabilir.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h4 className="mb-3">Yarışma seviyeleri</h4>
              <p className="opacity-90">
                İsteğe bağlı sergileme anlarıyla sürükleyici bir sınıf projesi
                olarak tasarlandı.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>
      <QuoteBand
        quote="STEM Racing Discovery, okulumuzda STEM’in görünürlüğünü artırdı; öğrencilere fikirlerini keşfedip test edebilecekleri güvenli bir alan sundu."
        attribution="İlkokul eğitimcisi"
      />
      <SplitContent
        title="Hazır kaynaklar"
        description="Altı yapılandırılmış çalışma ünitesiyle STEM Racing Discovery, öğrencileri eksiksiz bir öğrenme yolculuğuna çıkarır."
        cta={{ label: "ÜCRETSİZ KAYNAKLARI ALIN", href: "/resources", external: false }}
        image={images.discovery2}
        theme="white-bold"
      />
      <SplitContent
        title="Kullanımı kolay ekipman"
        description="STEM Racing Discovery, heyecanlı ve uygulamalı bir öğrenme projesi için gereken ekipman ve kaynakları içerir."
        cta={{
          label: "EKİPMANI KEŞFEDİN",
          href: "https://denford.co.uk/shop/stem-racing-discovery",
          external: true,
        }}
        image={images.discovery3}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
