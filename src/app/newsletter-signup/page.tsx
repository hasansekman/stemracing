import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { NewsletterForm } from "@/components/forms/Forms";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Bülten Kaydı",
  description:
    "En güncel STEM Racing yarışma duyurularını, kaynakları ve başarı hikâyelerini alın.",
  path: "/newsletter-signup",
});

export default function NewsletterSignupPage() {
  return (
    <>
      <Hero
        title="Güncel kalın"
        description="En son STEM Racing haberlerinden ilk siz haberdar olun; ekibinizi bir adım öne taşıyacak ipuçları ve araçlarla yarışa hazırlanın."
        theme="black-bold"
        image={images.involveHero}
        imageAlt="STEM Racing bülten"
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <FadeIn>
            <NewsletterForm />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
