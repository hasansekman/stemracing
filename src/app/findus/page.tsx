import { Hero } from "@/components/ui/Hero";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Bizi Bulun | İletişime geçin",
  path: "/findus",
});

export default function FindUsPage() {
  return (
    <>
      <Hero
        title="Bizi bulun"
        theme="black-bold"
        image={images.findus}
        imageAlt="STEM Racing küresel topluluğu"
      />
      <Section theme="bright" className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <FadeIn>
              <h2 className="mb-4">Dünyada STEM Racing</h2>
              <p className="opacity-90 mb-6">
                Yerel dokunuşlu küresel bir yarışma olan STEM Racing, dünyada 60’tan
                fazla ülkede bulunur ve her ülke bölgesel bir temsilci tarafından
                yönetilir. Kayıt olmak veya daha fazla bilgi almak için Ulusal
                Koordinatörünüzü aşağıdan bulun.
              </p>
              <Button href="/contact" variant="secondary">
                BİZE KATILIN
              </Button>
            </FadeIn>
            <FadeIn delay={0.05} className="w-full">
              <div className="media-frame aspect-[4/3] min-h-[220px] w-full max-w-full border border-white/20 bg-brand-black/20">
                <iframe
                  title="STEM Racing küresel haritası"
                  src="https://www.google.com/maps/d/embed?mid=1-kumMlb6YyVtJB980UPdvjFB5-kVGv9R&hl=tr&ehbc=2E312F"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
      <JoinTheRace
        title="STEM Racing küresel topluluğuna katılmaya hazır mısınız?"
        ctaLabel="İLETİŞİME GEÇİN"
        ctaHref="/contact"
      />
    </>
  );
}
