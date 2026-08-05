import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-black text-white px-6">
      <div className="max-w-xl text-center">
        <p className="eyebrow mb-4 text-brand-accent">404</p>
        <h1 className="text-5xl md:text-6xl mb-6">Yarış çizgisinden çıktık</h1>
        <p className="opacity-90 mb-8">
          Aradığınız sayfa bulunamadı veya taşınmış olabilir. Menüyü kontrol
          edin ya da STEM Racing yolculuğunuza devam etmek için ana sayfaya
          dönün.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/">Ana sayfa</Button>
          <Button href="/findus" variant="secondary">
            Hemen başlayın
          </Button>
        </div>
      </div>
    </div>
  );
}
