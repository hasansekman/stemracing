import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Biz kimiz?",
    body: "STEM Racing Global, bu web sitesini öğrenciler, eğitimciler ve partnerlerle program bilgilerini, kaynakları ve fırsatları paylaşmak için işletir.",
  },
  {
    title: "Topladığımız bilgiler",
    body: "Bu demo sitedeki iletişim, bülten veya ilgi formlarını kullandığınızda bilgiler yalnızca tarayıcıda doğrulanır ve bir arka uç hizmetine iletilmez.",
  },
  {
    title: "Bilgileri nasıl kullanırız?",
    body: "Canlı bir ortamda gönderilen bilgiler; sorularınıza yanıt vermek, talep ettiğiniz güncellemeleri sağlamak ve program sunumunu iyileştirmek için kullanılırdı.",
  },
  {
    title: "Haklarınız",
    body: "Bulunduğunuz yere bağlı olarak kişisel verilere erişme, düzeltme veya silme haklarına sahip olabilirsiniz. Canlı platformda gizlilik talepleri için STEM Racing ile iletişime geçin.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero title="Gizlilik Politikası" theme="black-bold" />
      <Section theme="light-bold" className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.04}>
              <h2 className="text-3xl mb-3">{section.title}</h2>
              <p className="opacity-90 leading-relaxed">{section.body}</p>
            </FadeIn>
          ))}
        </Container>
      </Section>
    </>
  );
}
