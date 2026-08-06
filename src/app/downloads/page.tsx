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

const UK = "https://www.stemracing.co.uk/s";

type DownloadAction = { label: string; href: string };

type DownloadItem = {
  name: string;
  actions: DownloadAction[];
};

const groups: { title: string; items: DownloadItem[] }[] = [
  {
    title: "Primary ve Secondary kaynakları",
    items: [
      {
        name: "STEM Racing çıkartması (beyaz)",
        actions: [
          { label: "BEYAZ", href: `${UK}/decal_white.png` },
          { label: "YEDEK", href: `${UK}/decal_white_spare.png` },
        ],
      },
      {
        name: "STEM Racing çıkartması (siyah)",
        actions: [
          { label: "SİYAH A", href: `${UK}/decal_black_a.png` },
          { label: "SİYAH B", href: `${UK}/decal_black_b.png` },
        ],
      },
      {
        name: "Kask / Halo 3D tasarım dosyaları",
        actions: [
          {
            label: "İndir (Zip)",
            href: `${UK}/halo_2025_with_6mm_hole_and_sr_logo-1.zip`,
          },
          {
            label: "Entry jig (STL)",
            href: `${UK}/final_entry_class_halo_spigot_drilling_jig.stl`,
          },
        ],
      },
    ],
  },
  {
    title: "Secondary kaynakları",
    items: [
      {
        name: "Entry Class No-Go Zone",
        actions: [
          { label: "İndir (Zip)", href: `${UK}/Entry-Class-No-Go-Zone.zip` },
        ],
      },
      {
        name: "Development Class No-Go Zones",
        actions: [
          { label: "İndir (Zip)", href: `${UK}/Dev-Class-No-Go-Zones-er9j.zip` },
        ],
      },
      {
        name: "Development Halo Spigot Drilling Jig",
        actions: [
          {
            label: "İndir (STL)",
            href: `${UK}/Development-Halo-Spigot-Drilling-Jig-for-3D-Printing-V2.stl`,
          },
        ],
      },
      {
        name: "Denetim aparatları (Entry / Dev / Pro)",
        actions: [
          { label: "ENTRY", href: `${UK}/Entry-Guages.zip` },
          { label: "DEV", href: `${UK}/Dev-Guages.zip` },
          { label: "PRO", href: `${UK}/Pro-Guages.zip` },
        ],
      },
    ],
  },
  {
    title: "Diğer kaynaklar",
    items: [
      {
        name: "Ek dosyalar ve güncel paketler",
        actions: [
          {
            label: "Tüm kaynaklar",
            href: "/resources",
          },
        ],
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
                          key={action.label}
                          href={action.href}
                          variant="secondary"
                          className="!py-3 !px-4 !text-sm"
                          external={action.href.startsWith("http")}
                        >
                          {action.label}
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
