import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig, socialLinks } from "@/lib/nav";

export function Footer() {
  return (
    <Section as="footer" theme="black-bold" className="pt-16 pb-10 border-t border-white/10">
      <Container>
        <div className="mb-14">
          <div className="mb-5">
            <BrandLogo heightClassName="h-12 md:h-14" />
          </div>
          <p className="max-w-md opacity-90 leading-relaxed">{siteConfig.mission}</p>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-70 mb-4">
            Partnerlerimiz
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-80">
            <span>Formula 1®</span>
            <span>Ansys</span>
            <span>Autodesk</span>
            <span>Denford</span>
            <span>PMIEF</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider hover:text-brand-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-sm opacity-70 border-t border-white/10 pt-6">
          <Link href="/privacy-policy" className="hover:opacity-100">
            Gizlilik Politikası
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/cookie-policy" className="hover:opacity-100">
            Çerez Politikası
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/global-platform-tender" className="hover:opacity-100">
            Küresel Platform İhalesi
          </Link>
        </div>
      </Container>
    </Section>
  );
}
