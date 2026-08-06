import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { AccordionFaq } from "@/components/sections/AccordionFaq";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { DonateForm } from "@/components/forms/Forms";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Bağış Yap",
  description:
    "STEM Racing’in engelleri kaldırma ve geleceğin STEM kariyerlerine ilham verme misyonunu destekleyin.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Bugün etki yaratın"
        description="Kâr amacı gütmeyen bir kuruluş olarak STEM Racing; partnerlerin, sponsorların, gönüllülerin ve sizin gibi insanların desteğine ihtiyaç duyar."
        theme="white"
        image={images.donate}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        title="Bağışınız neleri mümkün kılar?"
        theme="light-bold"
        features={[
          {
            title: "Ekip desteği",
            description:
              "Yarışmayı dünya çapında okullara ulaştıran tutkulu bir ekiple güçleniyoruz.",
          },
          {
            title: "Eğitim etkinlikleri",
            description:
              "Öğrencilerin projelerini ortaya koyduğu bölgesel, ulusal ve küresel etkinlikler.",
          },
          {
            title: "Engelleri kaldırmak",
            description:
              "Finansman, en çok ihtiyacı olan okul ve öğrencilere erişimi genişletir.",
          },
        ]}
      />
      <Section theme="black-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h2 className="mb-4">Dilediğiniz kadar verin</h2>
              <p className="opacity-90">
                Her bağış yardımcı olur, sayılır ve gerçekten fark yaratır.
                Küçük, büyük, tek seferlik veya aylık — her katkı daha fazla
                öğrenciye, yeni bölgelere ulaşmamızı sağlar.
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <DonateForm />
            </FadeIn>
          </div>
        </Container>
      </Section>
      <AccordionFaq
        items={[
          {
            question: "Bağışım nereye gidiyor?",
            answer:
              "Bağışlar doğrudan program sunumunu destekler — öğrenci katılımı, eğitim, ekipman ile bölgesel, ulusal ve küresel etkinlikler dahil.",
          },
          {
            question: "Aylık bağış yapabilir miyim?",
            answer:
              "Evet. Bağış formundaki aylık seçeneğiyle düzenli destek niyetinizi belirtebilirsiniz. Ödeme altyapısı bağlandığında işlem tamamlanır.",
          },
          {
            question: "STEM Racing kâr amacı gütmeyen bir kuruluş mu?",
            answer:
              "Evet. STEM Racing, STEM öğrenimine erişimi genişletmeye odaklı kâr amacı gütmeyen bir eğitim girişimidir.",
          },
        ]}
      />
    </>
  );
}
