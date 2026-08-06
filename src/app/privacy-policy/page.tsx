import { Hero } from "@/components/ui/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/nav";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Biz kimiz?",
    body: `${siteConfig.name}, bu web sitesini öğrenciler, eğitimciler ve partnerlerle program bilgilerini, kaynakları ve fırsatları paylaşmak için işletir. Resmi adres: ${siteConfig.address}.`,
  },
  {
    title: "Topladığımız bilgiler",
    body: "İletişim, bülten veya ilgi formlarını kullandığınızda ad, e-posta ve mesaj içeriği gibi bilgileri toplayabiliriz. Site kullanımına ilişkin teknik günlükler (IP, tarayıcı türü) güvenlik ve performans için işlenebilir.",
  },
  {
    title: "Bilgileri nasıl kullanırız?",
    body: "Toplanan bilgiler sorularınıza yanıt vermek, talep ettiğiniz güncellemeleri sağlamak, program sunumunu iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek için kullanılır. Pazarlama iletişimleri yalnızca açık rızanızla gönderilir.",
  },
  {
    title: "Haklarınız",
    body: "Bulunduğunuz yere bağlı olarak kişisel verilere erişme, düzeltme, silme veya işlemeyi kısıtlama haklarına sahip olabilirsiniz. Gizlilik talepleri için iletişim formumuzu kullanın veya doğrudan STEM Racing ile iletişime geçin.",
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
              <h2 className="mb-3 text-3xl">{section.title}</h2>
              <p className="leading-relaxed opacity-90">{section.body}</p>
            </FadeIn>
          ))}
        </Container>
      </Section>
    </>
  );
}
