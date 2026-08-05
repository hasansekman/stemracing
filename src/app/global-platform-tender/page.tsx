import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Küresel Platform İhalesi",
  path: "/global-platform-tender",
});

export default function GlobalPlatformTenderPage() {
  return (
    <>
      <Hero
        title="Küresel Platform İhalesi"
        description="STEM Racing’in küresel platformu ve sunum altyapısı konusunda iş birliği yapmak isteyen kurumlar için bilgiler."
        theme="black"
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="opacity-90 leading-relaxed mb-8">
              STEM Racing, uluslararası ağı boyunca platform, teknoloji ve
              operasyonel sunumu desteklemek üzere partnerleri dönemsel olarak
              davet eder. Kurumunuz güncel fırsatlar hakkında daha fazla bilgi
              almak isterse lütfen bizimle iletişime geçin.
            </p>
            <Button href="/contact">İletişime geçin</Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
