import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container, Section } from "@/components/ui/Section";
import { siteConfig, socialLinks } from "@/lib/nav";

export function Footer() {
  return (
    <Section as="footer" theme="black-bold" className="border-t border-white/10 pb-10 pt-16">
      <Container>
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5">
              <BrandLogo heightClassName="h-12 md:h-14" />
            </div>
            <p className="max-w-md leading-relaxed opacity-90">{siteConfig.mission}</p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl md:text-3xl">Güncel Kalın</h3>
            <p className="mb-6 max-w-md opacity-90">
              En yeni yarışma duyurularını, kaynakları ve başarı hikâyelerini
              doğrudan e-posta kutunuza alın. STEM Racing haberlerinden ilk siz
              haberdar olun; ekibinizi bir adım öne taşıyacak ipuçları ve
              araçlarla yarışa hazırlanın.
            </p>
            <Button href="/newsletter-signup">Hemen kaydolun</Button>
          </div>
        </div>

        <div className="mb-10">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] opacity-70">
            Partnerlerimiz
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative h-10 w-full max-w-xl sm:h-12">
              <Image
                src="/images/partners/logos-strip-1.png"
                alt="Autodesk, Denford ve PMIEF"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="(max-width: 768px) 90vw, 560px"
                unoptimized
              />
            </div>
            <div className="relative h-10 w-full max-w-md sm:h-12">
              <Image
                src="/images/partners/logos-strip-2.png"
                alt="Ansys ve diğer partnerler"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="(max-width: 768px) 80vw, 420px"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider transition-colors hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm opacity-70 md:flex-row md:items-center md:gap-6">
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
