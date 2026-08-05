import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { InterestForm } from "@/components/forms/Forms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Potansiyelinizi Ortaya Çıkarın",
  description:
    "STEM Racing öğrencileri için Maaden | Aston Martin öğrenme kanalına ilginizi kaydedin.",
  path: "/unearth-your-greatness",
});

export default function UnearthPage() {
  return (
    <>
      <Hero
        title="Potansiyelinizi ortaya çıkarın"
        description="Yakında: STEM Racing öğrencileri için Maaden | Aston Martin öğrenme kanalı — kaynaklar, rehberler ve sektör içgörüsü tek dijital destinasyonda."
        theme="black"
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <FadeIn>
            <InterestForm title="Öğrenme kanalına ilgi kaydı oluşturun" />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
