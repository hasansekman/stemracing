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
            <h2 className="mb-3 text-3xl">Çerezler nasıl kullanılır?</h2>
            <p className="leading-relaxed opacity-90">
              Bu sitede temel işlevsellik için gerekli çerezler kullanılabilir
              (oturum, güvenlik ve tercih hatırlama). Analitik veya pazarlama
              çerezleri yalnızca açık onayınızla etkinleştirilir.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mb-3 text-3xl">Tercihlerinizi yönetmek</h2>
            <p className="leading-relaxed opacity-90">
              Çerezleri tarayıcı ayarlarınız üzerinden kontrol edebilir veya
              silebilirsiniz. Bazı çerezleri engellemek belirli site
              özelliklerini etkileyebilir. Daha fazla bilgi için gizlilik
              politikamıza bakın.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
