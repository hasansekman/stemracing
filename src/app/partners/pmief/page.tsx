import { Hero } from "@/components/ui/Hero";
import { SplitContent } from "@/components/ui/SplitContent";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "PMIEF | Proje Yönetimi El Kitabı",
  path: "/partners/pmief",
});

export default function PmiefPage() {
  return (
    <>
      <Hero
        title="PMIEF"
        description="Hayat boyu proje yönetimi becerileri — STEM Racing ekiplerinin profesyoneller gibi planlamasına, liderlik etmesine ve teslim etmesine yardımcı olur."
        theme="black"
      />
      <SplitContent
        title="Hayat boyu beceriler"
        description="Project Management Institute Educational Foundation aracılığıyla öğrenciler planlama, risk, liderlik ve iş birliği çerçevelerini öğrenir."
        image={images.pmiefTile}
        theme="black-bold"
      />
      <SplitContent
        title="Etki yaratmak"
        description="Proje yönetimi, STEM kariyerlerinde ve ötesinde her öğrencinin geleceği için kritik öneme sahiptir."
        image={images.involveTeachers}
        theme="light-bold"
        reverse
      />
      <SplitContent
        title="El kitabınızı indirin"
        description="STEM Racing Proje Yönetimi Rehberi’ni indirin ve profesyonel süreçleri ekip iş akışınıza taşıyın."
        cta={{ label: "İndir", href: "/resources" }}
        image={images.pmiefTile}
        theme="white-bold"
      />
      <JoinTheRace />
    </>
  );
}
