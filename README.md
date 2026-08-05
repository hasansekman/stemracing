# STEM Racing Türkiye

[stemracing.com](https://www.stemracing.com) referans alınarak geliştirilmiş frontend yeniden yazımı.

## Teknoloji

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Başlangıç

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

## Komutlar

- `npm run dev` — geliştirme sunucusu
- `npm run build` — production derlemesi
- `npm run start` — production sunucusu
- `npm run lint` — ESLint

## Notlar

- Tüm arayüz metinleri Türkçedir; STEM Racing, Formula 1® ve partner marka adları korunmuştur.
- Formlar yalnızca istemci tarafında çalışır (doğrulama + başarı durumu). Backend yoktur.
- SEO: metadata yardımcısı, `sitemap.ts`, `robots.ts`.
- App Router özel dosyaları: `loading.tsx`, `error.tsx`, `not-found.tsx`.
