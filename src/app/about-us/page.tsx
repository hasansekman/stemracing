import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Hakkımızda | STEM Racing'e katılın",
  description:
    "Sınırları zorlayanlar, değişim yaratanlar ve geleceğin sektör liderleri için sınıf yarışması.",
  path: "/about-us",
});

const ambassadors = [
  "Mühendislik Mentorları",
  "Sektör Elçileri",
  "Mezun Şampiyonlar",
  "Eğitimci Liderler",
];

export default function AboutUsPage() {
  return (
    <>
      <Hero
        title="STEM Racing hakkında"
        description="Sınırları zorlayanlar, değişim yaratanlar ve geleceğin sektör liderleri için bir sınıf yarışması."
        theme="black"
        image={images.aboutHero}
        imageAlt="STEM Racing"
      />
      <FeatureGrid
        theme="black-bold"
        features={[
          {
            title: "Geleceğe ilham",
            description:
              "Gençlere gerçek dünya STEM becerileri kazandıran uygulamalı öğrenme — sınıfın içinde ve ötesinde ömür boyu sürecek merak, özgüven ve hedef duygusu uyandırır.",
          },
          {
            title: "Küresel ve kapsayıcı",
            description:
              "60’tan fazla ülkede bulunan kâr amacı gütmeyen bir program; kültürler arası öğrencileri ve eğitimcileri bir araya getirerek engelleri kaldırır, fırsatlar açar.",
          },
          {
            title: "Formula 1® destekli",
            description:
              "Dünyanın en heyecan verici sporunun desteğiyle STEM Racing, sınıfı sektöre bağlar — eğlenceyi geleceğin kariyer yollarıyla buluşturur.",
          },
        ]}
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="mb-4">Yarışmamız</h2>
              <p className="opacity-90 mb-6">
                STEM Racing, öğrencileri kendi Formula 1® takımlarını kurmaya
                davet eder. 3–6 kişilik gruplarda minyatür araçlarını tasarlar,
                geliştirir ve yarıştırırken profesyonel bir projenin her
                boyutunu yönetirler.
              </p>
              <Button href="/the-competition">Yarışmayı keşfedin</Button>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-4">Etkimiz</h2>
              <p className="opacity-90 mb-6">
                Yirmi beş yılı aşkın süredir STEM Racing, binlerce gencin
                yenilik tutkusunu ateşledi — motorsport ve mühendisliğin
                zirvesine uzanan kariyerler başlattı.
              </p>
              <Button href="/our-impact">Etkimizi keşfedin</Button>
            </FadeIn>
          </div>
        </Container>
      </Section>
      <Section theme="black-bold" className="py-16 md:py-24">
        <Container>
          <FadeIn className="mb-10 max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-4">Elçilerimiz</h1>
            <p className="opacity-90">
              Motorsportun en parlak zihinlerinin desteğinden gurur duyuyoruz.
              Elçi ağımız bilgi paylaşır, zaman ayırır ve programımızı dünya
              çapında güçlendirir.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ambassadors.map((name, i) => (
              <FadeIn
                key={name}
                delay={i * 0.04}
                className="border border-white/15 p-6 min-h-[160px] flex items-end"
              >
                <h4 className="text-xl">{name}</h4>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
      <QuoteBand
        quote="Yıllardır büyük bir heyecanla desteklediğim bir program. Her yıl standart yükseliyor gibi."
        attribution="STEM Racing Elçisi"
      />
      <SplitContent
        title="Başarı hikâyeleri"
        description="STEM Racing sayısız kariyer başlattı; motorsport ve mühendisliğin zirvesine uzanan yolculuklara yakıt oldu."
        cta={{ label: "Başarı hikâyelerini okuyun", href: "/successstories" }}
        image={images.aboutSplit}
        theme="light-bold"
      />
      <JoinTheRace />
    </>
  );
}
