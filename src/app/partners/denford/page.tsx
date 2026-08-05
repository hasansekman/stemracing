import { Hero } from "@/components/ui/Hero";
import { SplitContent } from "@/components/ui/SplitContent";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Denford | Ekipman partneri",
  path: "/partners/denford",
});

export default function DenfordPage() {
  return (
    <>
      <Hero
        title="Denford"
        description="Eğitim üretim teknolojilerinde köklü bir mirasa sahip STEM Racing kurucu partneri."
        theme="black"
      />
      <SplitContent
        title="Köklü bir miras"
        description="Denford, STEM Racing’in en erken günlerinden beri okulların CNC ve sınıf üretim yollarına erişmesine yardımcı oluyor."
        image={images.denfordTile}
        theme="black-bold"
      />
      <SplitContent
        title="2000’de STEM Racing’in kuruluşu"
        description="Programın başlangıcından bugünkü küresel harekete kadar Denford’un yenilik taahhüdü, üretimin önündeki engelleri kaldırmaya yardımcı oldu."
        image={images.homeJourney}
        theme="light-bold"
        reverse
      />
      <SplitContent
        title="Ekipmanı keşfedin"
        description="Okullar ve yarışma ekipleri için tasarlanmış CNC frezeleri ve STEM Racing kitlerine göz atın."
        cta={{
          label: "Keşfedin",
          href: "https://denford.co.uk/products?type=f1-in-schools&page=1",
          external: true,
        }}
        image={images.denfordTile}
        theme="white-bold"
      />
      <JoinTheRace />
    </>
  );
}
