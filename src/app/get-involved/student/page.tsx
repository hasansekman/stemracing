import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Öğrenciler | STEM Racing'e katılın",
  path: "/get-involved/student",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Öğrenciler için"
        description="STEM Racing ile ömür boyu sürecek bir yolculuğa çıkın — zihinleri ve ufukları genişleten proje."
        theme="black"
        cta={{ label: "Hemen başlayın", href: "/contact" }}
        image={images.involveStudents}
      />
      <FeatureGrid
        title="Neden STEM Racing’e katılmalısınız?"
        theme="light-bold"
        features={[
          { title: "Sınıfın ötesinde beceriler", description: "Yenilikçi çalışma yöntemleri ve geleceğe odaklı becerilerle güçlenin." },
          { title: "Dostluklar kurun", description: "Yarış gününün çok ötesine uzanan bir ekip kültürü oluşturun." },
          { title: "Potansiyelinizi ortaya çıkarın", description: "Mühendislik, tasarım, markalaşma ve liderlik rolleri arasında kendinizi keşfedin." },
        ]}
      />
      <SplitContent
        title="Tutkunuzu bulun"
        description="Her ekip üyesinin farklı bir alandan sorumlu olduğu STEM Racing, gerçek dünya kariyer yollarını keşfetmenizi sağlar."
        bullets={["Disiplinler arası mükemmelliği tanıyan podyumlar ve ödüller","Tasarım, üretim ve iletişim için uygulamalı beceriler","Jüri ve sektör konuklarına sunum yaparak kazanılan özgüven"]}
        cta={{ label: "HEMEN BAŞLAYIN", href: "/contact" }}
        image={images.homeStudents}
        theme="black-bold"
      />
      <QuoteBand quote="STEM Racing olmasaydı bugün bulunduğum yerde olmazdım; Formula 1’de iş deneyimi fırsatlarına ulaşmama büyük katkı sağladı." attribution="STEM Racing mezunu" />
      <SplitContent
        title="Özgüveninizi geliştirin"
        description="Sözlü sunumlardan sektör etkinliklerine kadar STEM Racing, özgüveninizi ve yetkinliğinizi büyütmenize yardımcı olur."
        image={images.involveStudents}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
