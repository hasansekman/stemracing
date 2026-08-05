import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim | Bugün bize ulaşın",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero title="İletişim" theme="black-bold" />

      <Section theme="bright" className="py-4 overflow-hidden">
        <div className="flex w-max max-w-none whitespace-nowrap eyebrow py-3 motion-safe:animate-[marquee_18s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6">
              2026 için hemen kayıt olun
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
