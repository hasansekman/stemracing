import { Hero } from "@/components/ui/Hero";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "İndirmeler | STEM Racing deneyiminizi güçlendirin",
  path: "/downloads",
});

const groups = [
  {
    title: "Primary ve Secondary kaynakları",
    items: [
      { name: "STEM Racing çıkartması (beyaz)", actions: ["BEYAZ"] },
      { name: "STEM Racing çıkartması (siyah)", actions: ["SİYAH"] },
      {
        name: "Kask 3D tasarım dosyaları",
        actions: ["İndir (Zip)", "İndir (STL)"],
      },
    ],
  },
  {
    title: "Secondary kaynakları",
    items: [
      {
        name: "Pro Class denetim aparatları Set 1",
        actions: ["SET 1 (AI)", "SET 1 (DXF)"],
      },
      {
        name: "Pro Class denetim aparatları Set 2",
        actions: ["SET 2 (AI) V2", "SET 2 (DXF) V2"],
      },
      {
        name: "Pro Class denetim aparatları Set 3",
        actions: ["SET 3 (AI)", "SET 3 (DXF)"],
      },
      {
        name: "Halo üretim dosyaları",
        actions: ["İndir (STL)", "İndir (Zip)"],
      },
      { name: "Model Block", actions: ["İndir"] },
    ],
  },
  {
    title: "Primary kaynakları",
    items: [
      { name: "Formula 1® takım giydirmeleri", actions: ["İndir (Zip)"] },
      {
        name: "Entry Class denetim aparatları",
        actions: ["SET 1 (AI)", "SET 1 (DXF)"],
      },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Hero
        title="İndirmeler"
        description="Yarışmanın kural ve regülasyonlarına tam uyum için temel STEM Racing grafiklerini ve araçlarını indirin."
        theme="black"
        image={images.resources2}
        imageAlt="STEM Racing indirmeler"
      />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container>
          {groups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.05} className="mb-14">
              <h2 className="mb-8">{group.title}</h2>
              <div className="space-y-8">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:items-center border-b border-brand-black/10 pb-8"
                  >
                    <h4 className="text-xl md:text-2xl">{item.name}</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.actions.map((action) => (
                        <Button
                          key={action}
                          href="/contact"
                          variant="secondary"
                          className="!py-3 !px-4 !text-sm"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </Container>
      </Section>
      <JoinTheRace />
    </>
  );
}
