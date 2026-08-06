import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/Forms";
import { siteConfig } from "@/lib/nav";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim | Bugün bize ulaşın",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero title="İletişim" theme="black-bold" />

      <Section theme="bright" className="overflow-hidden py-4">
        <div className="flex overflow-hidden">
          <div className="eyebrow flex w-max max-w-none whitespace-nowrap py-3 motion-safe:animate-[marquee_18s_linear_infinite] motion-reduce:mx-auto motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:whitespace-normal">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-6">
                2026 İÇİN HEMEN KAYIT OLUN
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section theme="white-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <FadeIn>
              <h3 className="mb-4 text-3xl">Bize mesaj gönderin</h3>
              <p className="mb-6 opacity-90">
                Genel bir soru sormak veya daha fazla bilgi talep etmek
                istiyorsanız lütfen iletişim formunu kullanın.
              </p>
              <p className="text-sm leading-relaxed opacity-80">
                {siteConfig.address}
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
