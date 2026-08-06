import Image from "next/image";
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
  {
    name: "James Allen",
    role: "President, Autosport Business & F1 at Motorsport Network",
    image: images.ambassadorJamesAllen,
  },
  {
    name: "Bernie Ecclestone",
    role: "F1 kurucusu ve eski yarışçı",
    image: images.ambassadorBernie,
  },
  {
    name: "Paul Monaghan",
    role: "Chief Engineer, Oracle Red Bull Racing",
    image: images.ambassadorPaulMonaghan,
  },
  {
    name: "Claire Williams",
    role: "Britanyalı motorsport yöneticisi",
    image: images.ambassadorClaireWilliams,
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Hero
        title="STEM Racing hakkında"
        description="Sınırları zorlayanlar, değişim yaratanlar ve geleceğin sektör liderleri için bir sınıf yarışması."
        theme="black"
        image={images.ukAboutHero}
        imageAlt="STEM Racing öğrencileri"
        imageClassName="object-cover object-center"
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

      <SplitContent
        title="Yarışmamız"
        description="STEM Racing, öğrencileri kendi Formula 1® takımlarını kurmaya davet eder. 3–6 kişilik gruplarda minyatür araçlarını tasarlar, geliştirir ve yarıştırırken profesyonel bir projenin her boyutunu yönetirler. Bölgesel etkinlikler ulusal finallere, en iyiler ise Aramco STEM Racing Dünya Finalleri’ne uzanır."
        cta={{ label: "Yarışmayı keşfedin", href: "/the-competition" }}
        image={images.ukAboutCompetition}
        imageAlt="STEM Racing yarışma anı"
        theme="light-bold"
      />

      <SplitContent
        title="Etkimiz"
        description="Yirmi beş yılı aşkın süredir STEM Racing, binlerce gencin yenilik tutkusunu ateşledi — motorsport ve mühendisliğin zirvesine uzanan kariyerler başlattı."
        cta={{ label: "Etkimizi keşfedin", href: "/our-impact" }}
        image={images.ukAboutImpactB}
        imageAlt="STEM Racing etkinliğinde öğrenciler"
        theme="white-bold"
        reverse
      />

      <Section theme="black-bold" className="py-16 md:py-24">
        <Container>
          <FadeIn className="mb-10 max-w-3xl">
            <h2 className="mb-4">Elçilerimiz</h2>
            <p className="opacity-90">
              Motorsportun en parlak zihinlerinin desteğinden gurur duyuyoruz.
              Elçi ağımız bilgi paylaşır, zaman ayırır ve programımızı dünya
              çapında güçlendirir.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-4 sm:gap-6">
            {ambassadors.map((ambassador, i) => (
              <FadeIn
                key={ambassador.name}
                delay={i * 0.04}
                className="group overflow-hidden border border-white/15"
              >
                <div className="media-frame relative aspect-[3/4] w-full">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 md:group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h4 className="text-xl leading-tight">{ambassador.name}</h4>
                    <p className="mt-1 text-sm opacity-80">{ambassador.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <QuoteBand
        quote="Yıllardır büyük bir heyecanla desteklediğim bir program. Her yıl standart yükseliyor gibi. Bu gençlerin ortaya koyduğu mühendislik yeniliği gerçekten ilham verici."
        attribution="James Allen"
      />

      <SplitContent
        title="Başarı hikâyeleri"
        description="STEM Racing sayısız kariyer başlattı; motorsport ve mühendisliğin zirvesine uzanan yolculuklara yakıt oldu."
        cta={{ label: "Başarı hikâyelerini okuyun", href: "/successstories" }}
        image={images.ukSuccessGeorgePoulter}
        imageAlt="STEM Racing mezunu başarı hikâyesi"
        theme="light-bold"
      />

      <Section theme="white-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                image: images.ukSuccessGeorgePoulter,
                title: "George Poulter",
                text: "Mercedes-AMG PETRONAS F1 Team — Mechanical Structural Analysis Engineer",
              },
              {
                image: images.ukSuccessLewisFowler,
                title: "Lewis Fowler",
                text: "Aston Martin Aramco Formula One™ Team — Graduate Design Engineer, Aerodynamics",
              },
              {
                image: images.ukSuccessGeorgeStonor,
                title: "George Stonor",
                text: "Red Bull Powertrains — Mechanical Structural Analysis Engineer",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="media-frame relative mb-4 aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="opacity-90">{item.text}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10">
            <Button href="/successstories">Tüm başarı hikâyeleri</Button>
          </FadeIn>
        </Container>
      </Section>

      <JoinTheRace />
    </>
  );
}
