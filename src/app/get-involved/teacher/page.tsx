import { Hero } from "@/components/ui/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SplitContent } from "@/components/ui/SplitContent";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata = buildMetadata({
  title: "Öğretmenler | STEM Racing'e katılın",
  path: "/get-involved/teacher",
});

export default function Page() {
  return (
    <>
      <Hero
        title="Öğretmenler için"
        description="Heyecanı eğitimle ustalıkla harmanlayan STEM Racing, öğrencilere STEM öğrenmeye tutku kazandırır."
        theme="black"
        cta={{ label: "Hemen başlayın", href: "/findus" }}
        image={images.teacherHero}
      />
      <FeatureGrid
        title="STEM Racing’i sınıfınıza neden getirmelisiniz?"
        theme="light-bold"
        features={[
          { title: "Çok disiplinli öğrenme", description: "Öğrenciler CAD, CNC, marka oluşturma, proje yönetimi ve sunumu keşfeder." },
          { title: "Müfredat dostu", description: "Birçok ulusal müfredat ve ders programı yapısıyla uyumlu olacak şekilde tasarlandı." },
          { title: "Destekli öğretim", description: "Video eğitimler, webinarlar, teknik rehberler ve Autodesk CPD atölyeleri." },
        ]}
      />
      <SplitContent
        title="Çok disiplinli bir proje"
        description="STEM’e dayalı ama çok daha fazlasını kapsayan STEM Racing, öğrencilere çalışma dünyasının otantik bir tadını verir."
        bullets={["CAD yazılımında ustalaşan ürün tasarımcıları","Aerodinamik ve performansı test eden mühendisler","Marka kimliği ve sponsorluk geliştiren pazarlamacılar"]}
        cta={{ label: "HEMEN BAŞLAYIN", href: "/findus" }}
        image={images.homeEducators}
        theme="black-bold"
      />
      <QuoteBand quote="STEM Racing, öğretmen olarak son derece ödüllendirici bir proje. Kritik yaşam becerileri kazanan gençlerle yakın çalışmak ve onların gelişimini izlemek ilham verici." attribution="STEM Racing öğretmeni" />
      <SplitContent
        title="Esnek zaman taahhüdü"
        description="Kulüp olarak yürütün veya mevcut derslere entegre edin — haftada en az bir özel oturum öneririz."
        image={images.involveTeachers}
        theme="light-bold"
        reverse
      />
      <JoinTheRace />
    </>
  );
}
