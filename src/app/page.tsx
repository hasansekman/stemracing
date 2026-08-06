import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { newsPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "STEM Racing Türkiye",
  path: "/",
  absoluteTitle: true,
  description:
    "STEM Racing, öğrencilerin motorsport ve mühendislik yoluyla STEM becerileri kazandığı, Formula 1® destekli küresel eğitim yarışmasıdır.",
});

const journey = [
  {
    title: "1. Kayıt olun",
    description:
      "Ülke listesinden Ulusal Koordinatörünüzü hızlıca bulun; kayıt sürecinde size rehberlik etsin. Kayıt olduktan sonra başlamak için gereken tüm materyal ve yönergeleri alırsınız.",
  },
  {
    title: "2. Tasarlayın ve üretin",
    description:
      "Kaynak setleri, ücretsiz endüstri yazılımları ve eğitimcilerden oluşan destek ekibiyle STEM Racing aracınızı oluşturun ve proje çalışmalarınızı tamamlayın.",
  },
  {
    title: "3. Yarışın",
    description:
      "Hazır olduğunuzda bölgesel etkinliklerden ulusal ve küresel yarışmalara uzanan STEM Racing etkinliklerine katılın — eğlence ve heyecan dolu bir yolculuk sizi bekliyor.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={
          <>
            Geleceği
            <br />
            Hızlandırıyoruz
          </>
        }
        description="Engelleri kaldıran, yeteneği besleyen ve STEM, motorsport ile ötesinde geleceğin kariyerlerine ilham veren küresel bir eğitim girişimiyiz."
        cta={{ label: "HEMEN BAŞLAYIN", href: "/findus" }}
        variant="gradient"
        cutoutSrc="/images/uk-ref/uk-people.png"
        cutoutAlt="STEM Racing öğrencileri"
        animate={false}
        containerClassName="px-5 sm:px-8 md:px-10 lg:px-12"
        contentClassName="max-w-[min(100%,34rem)] md:max-w-[38rem] lg:max-w-[42rem]"
        titleClassName="text-[clamp(2.5rem,1rem+7vw,5.75rem)] leading-[0.95]"
        descriptionClassName="max-w-[32rem] leading-relaxed"
        className="min-h-[min(78svh,640px)] w-full pb-12 pt-8 sm:min-h-[min(75svh,700px)] md:pb-16 md:pt-12 lg:pb-20"
      />

      <Section theme="light-bold" className="py-16 md:py-24">
        <Container>
          <FadeIn className="mx-auto max-w-5xl text-center">
            <p className="mx-auto max-w-4xl text-base md:text-lg opacity-90">
              9–19 yaşındaki öğrencilerin ekipler kurarak minyatür yarış
              arabalarını tasarladığı, ürettiği, markalaştırdığı ve
              yarıştırdığı küresel, uygulamalı STEM yarışmasına katılın. Gerçek
              dünya mühendisliği, pazarlama ve proje yönetimi becerileri
              kazanırlar. Formula 1® destekli, eğitimcilerle birlikte
              geliştirilmiş, mühendislerin güvencesinde.
            </p>

            <p className="eyebrow mt-10 mb-6">Destekleyenler</p>

            <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
              <div className="relative mx-auto h-12 w-full max-w-md sm:mx-0 sm:h-14">
                <Image
                  src="/images/partners/logos-strip-1.png"
                  alt="Autodesk, Denford ve PMIEF"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 90vw, 420px"
                  unoptimized
                />
              </div>
              <div className="relative mx-auto h-12 w-full max-w-sm sm:mx-0 sm:h-14">
                <Image
                  src="/images/partners/logos-strip-2.png"
                  alt="Ansys ve diğer partnerler"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80vw, 360px"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <FeatureGrid
        theme="light-bold"
        features={[
          {
            title: "Sektör güvenilirliğiyle küresel STEM meydan okuması",
            description:
              "Uluslararası düzeyde tanınan, Formula 1® onaylı bu yarışma; tasarım, mühendislik, markalaşma ve sunum becerilerini bir araya getirerek öğrencilere gerçek anlamda çok disiplinli bir öğrenme deneyimi sunar.",
          },
          {
            title: "Gerçek dünya becerileri ve ekip çalışması",
            description:
              "9–19 yaşındaki öğrenciler 3–6 kişilik ekiplerde çalışır. Her birey tasarım, üretim, test veya markalaşma gibi belirli bir alandan sorumluluk alarak sahiplenmeyi öğrenir.",
          },
          {
            title: "Sınıftan yarışmaya heyecan dolu yolculuk",
            description:
              "Etkinliklerimizde öğrenciler emeklerini ortaya koyar: araçlar uzman denetçilerce incelenir, ekipler kafa kafaya yarışır ve jüri panellerine sunum yapar.",
          },
        ]}
      />

      <Section theme="black" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.homeJourney}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            quality={60}
          />
        </div>
        <Container className="relative z-10">
          <FadeIn className="mb-12">
            <h2>STEM Racing Yolculuğunuz</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {journey.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.05}>
                <h4 className="mb-3">{step.title}</h4>
                <p className="opacity-90">{step.description}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <Button href="/findus">HEMEN BAŞLAYIN</Button>
          </FadeIn>
        </Container>
      </Section>

      <Section theme="white-bold" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="eyebrow mb-3">KÜRESEL ETKİMİZ</p>
              <h2 className="mb-6">Zihinlere İlham, Geleceğe Yön</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="mb-2">Geleceğin Mühendislerini Güçlendiriyoruz</h4>
                  <p className="opacity-90">
                    STEM Racing, dünya genelinde binlerce öğrenciyi mühendislik
                    ve STEM kariyerlerine yönlendiriyor.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">Çeşitli ve Kapsayıcı Erişim</h4>
                  <p className="opacity-90">
                    Okullar, kıtalar ve öğrenme düzeyleri boyunca hızla
                    büyüyoruz — engelleri nerede bulursak orada kaldırıyoruz.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">Unutulmaz Deneyimler</h4>
                  <p className="opacity-90">
                    Formula 1 takım garaj turlarından pit lane yürüyüşlerine;
                    parayla alınamayacak deneyimler ve unutulmayacak anılar
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <Button href="/our-impact">Daha fazla bilgi</Button>
            </FadeIn>
          <FadeIn delay={0.1} className="media-frame relative aspect-[4/5] w-full">
              <Image
                src={images.homeImpact}
                alt="STEM Racing etkinliğinde bir öğrenci"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-brand-black/10">
            {[
              {
                title: "1999’da kuruldu",
                text: "F1 in Schools’tan STEM Racing’e evrilerek 25 yılı aşkın süredir mühendislik eğitimini hayata geçiriyoruz.",
              },
              {
                title: "9–19 yaş öğrenciler",
                text: "Öğrenmeyi ilerletecek şekilde tasarlanan STEM Racing; yaşa ve deneyime göre kategorilere ayrılır.",
              },
              {
                title: "Küresel etki",
                text: "65 ülkede bulunan STEM Racing; öğrenmeye ve yeniliğe tutkuyla bağlı eğitimci ve öğrencilerden oluşan küresel bir topluluktur.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <h4 className="mb-3">{item.title}</h4>
                <p className="opacity-90">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <QuoteBand
        quote="STEM Racing hayatımı değiştirdi. Bana çok sayıda beceri kazandırdı, sayısız fırsat yarattı ve bugün Formula 1’deki hayalimdeki role sahip olmamın nedeni."
        attribution="Ryan Clabon — Formula 1 Power Unit Mühendisi"
      />

      <SplitContent
        eyebrow="EĞİTİMCİLER İÇİN"
        title="Öğretmenler ve eğitimciler: Yanınızdayız"
        description="Öğretmen dostu araçlar, ücretsiz sertifikalı eğitim ve her ölçekteki okul için erişilebilir, düşük maliyetli bir proje."
        bullets={[
          "Video eğitimler, webinarlar, teknik rehberler ve anlık destek.",
          "CAD ve üretim için Autodesk destekli CPD atölyelerine katılın.",
          "Erişilebilirlik odaklı tasarlandı — asıl ihtiyaç öğrenme tutkusudur.",
        ]}
        cta={{ label: "Daha fazla bilgi", href: "/get-involved/teacher" }}
        image={images.homeEducators}
        imageAlt="Sınıfta elektronik üzerinde çalışan öğrenciler"
        theme="black-bold"
      />

      <SplitContent
        eyebrow="ÖĞRENCİLER İÇİN"
        title="Öğrenciler ve ekipler: Sizi sabırsızlıkla bekliyoruz"
        description="İster mühendis, ister tasarımcı, ister geleceğin pazarlama uzmanı olun; STEM Racing sizi motive eden rolü bulmanıza yardımcı olur."
        bullets={[
          "Mühendislik, tasarım ve markalaşma rolleri arasında tutkunuzu keşfedin.",
          "Formula 1 takımları, üniversiteler ve sektör liderleriyle bağlar kurun.",
          "Gerçek kariyerlere hazırlayan uygulamalı, aranan beceriler kazanın.",
        ]}
        cta={{ label: "Daha fazla bilgi", href: "/get-involved/student" }}
        image={images.homeStudents}
        imageAlt="Birlikte çalışan genç mühendisler"
        theme="white-bold"
        reverse
      />

      <JoinTheRace />

      <BlogGrid
        title="Son haberler"
        posts={newsPosts.slice(0, 3)}
        basePath="/news"
        cta={{ label: "Tüm haberler", href: "/news" }}
      />
    </>
  );
}
