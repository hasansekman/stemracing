import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çerez Politikası",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Hero title="Çerez Politikası" theme="black-bold" />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-8">
          <FadeIn>
            <h2 className="text-3xl mb-3">Çerezler nasıl kullanılır?</h2>
            <p className="opacity-90 leading-relaxed">
              Bu yeniden oluşturmada, gerektiğinde site işlevselliği için temel
              çerezler kullanılabilir. Analitik veya pazarlama çerezleri yalnızca
              üretim ortamında onayınızla etkinleştirilir.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-3xl mb-3">Tercihlerinizi yönetmek</h2>
            <p className="opacity-90 leading-relaxed">
              Çerezleri tarayıcı ayarlarınız üzerinden kontrol edebilirsiniz. Bazı
              çerezleri engellemek belirli site özelliklerini etkileyebilir.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
