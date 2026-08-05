# STEM Racing Global — UI / UX & Sayfa Yapısı Analizi

**Referans:** [https://www.stemracing.com](https://www.stemracing.com)  
**Analiz tarihi:** 1 Ağustos 2026  
**Kapsam:** Yalnızca UI, UX ve sayfa yapısı (form alanları, backend, API, veritabanı hariç)

---

## 1. Özet

STEM Racing Global, **Squarespace 7.1** üzerinde çalışan marka / eğitim sitesidir. Görsel dil motorsport + STEM eğitimini birleştirir: koyu mor-siyah zemin, magenta aksan, italik display tipografi ve full-bleed fotoğraf section’ları.

Site, tekrarlayan section kalıplarıyla (hero → value props → CTA band → footer newsletter) ölçeklenmiş bir **marketing site** mimarisine sahip. İçerik sayfaları Fluid Engine grid ile kurulmuş; haber ve başarı hikâyeleri blog collection layout’larıyla listeleniyor.

| Özellik | Değer |
|--------|--------|
| Platform | Squarespace 7.1 |
| Dil | en-GB |
| Max içerik genişliği | `1359px` |
| Sayfa yatay padding | `3vw` (mobil gutter `6vw`) |
| Header | Fixed, full-width, solid (transparent değil) |
| Global animasyon | Fade, `1.5s`, delay `0.6s`, ease, detailed |

---

## 2. Site haritası & bilgi mimarisi

### 2.1 Ana navigasyon (desktop)

| Menü (folder / item) | Alt linkler |
|----------------------|-------------|
| **About** | About Us, Our Impact, Our Success Stories |
| **Competition** | The Competition, Discovery (6+), Primary (9–11), Secondary (11–19), World Finals 2025, World Finals 2026 |
| **Get Involved** | Overview, Teacher, Student, Volunteer, Sponsor, Find Us |
| **Partners** | Our Partners, Ansys, Autodesk, Denford, PMIEF |
| **Resources** | All Resources, Downloads, Fusion Fundamentals |
| **News** | `/news` (folder değil, düz link) |
| **Donate** | `/donate` (düz link) |
| **CTA** | Get in touch → `/contact` |

### 2.2 Sayfa envanteri

| URL | Rol |
|-----|-----|
| `/` | Ana sayfa / landing |
| `/about-us` | Kurumsal hikâye, elçiler, başarı özeti |
| `/our-impact` | Etki metrikleri ve hikâyeler |
| `/successstories` | Alumni başarı blog listesi |
| `/the-competition` | Kategori hub |
| `/discovery` | 6+ sınıf programı |
| `/primary` | 9–11 sınıf programı |
| `/secondary` | 11–19 (Entry / Development / Professional) |
| `/aramco-stem-racing-world-finals` | 2025 World Finals recap |
| `/aramco-stem-racing-world-finals-2026` | 2026 etkinlik preview |
| `/get-involved/overview` | Katılım hub (4 persona kartı) |
| `/get-involved/teacher` | Öğretmen persona |
| `/get-involved/student` | Öğrenci persona |
| `/get-involved/volunteer` | Gönüllü persona |
| `/get-involved/sponsor` | Sponsor persona |
| `/findus` | Ülke / koordinatör haritası |
| `/partners/our-partners` | Partner hub |
| `/partners/ansys` | Partner detay |
| `/partners/autodesk` | Partner detay |
| `/partners/denford` | Partner detay |
| `/partners/pmief` | Partner detay |
| `/resources` | Kaynak kartları hub |
| `/downloads` | Dosya indirme grid’i |
| `/fusion-fundamentals` | Eğitim / kurs takvimi |
| `/news` | Haber listesi (blog basic grid) |
| `/news/[slug]` | Haber detay (narrow article) |
| `/successstories/[slug]` | Başarı hikâyesi detay |
| `/donate` | Bağış landing (+ FAQ accordion) |
| `/contact` | İletişim (form var; alan analizi yok) |
| `/newsletter-signup` | Bülten kayıt |
| `/privacy-policy` | Yasal |
| `/cookie-policy` | Yasal |
| `/global-platform-tender` | Tender / ihale sayfası |
| `/unearth-your-greatness` | Learning channel ilgi kaydı |

**Not:** Header’da cart (`/cart`) görünür; e-ticaret kalıntısı / Squarespace commerce remnant. Bazı CTA’lar kırık veya korumalı URL’lere gider (`/contact-1` 404, `/success-stories` 404, `/discovery-resources` 401).

### 2.3 Kullanıcı akışları (UX)

```
Ana sayfa
  ├─ GET STARTED → /findus (ülke koordinatörü)
  ├─ Educators Learn more → /get-involved/teacher
  ├─ Students Learn more → /get-involved/student
  └─ News → /news → article

Competition hub (/the-competition)
  ├─ Discovery / Primary / Secondary detay
  └─ World Finals 2025 / 2026

Get Involved hub
  └─ Teacher | Student | Volunteer | Sponsor → Contact / Find Us

Resources hub
  ├─ Downloads / Fusion / Partner yazılımları
  └─ PDF regülasyonlar
```

Tekrarlayan global CTA: **"Ready to ignite your students’ STEM potential?"** → `GET STARTED` → `/findus`.

---

## 3. Global chrome: Header, Footer, Menüler

### 3.1 Header

**Yapı (Squarespace header):**
- Sol: Logo (STEM Racing + Supported by F1)
- Orta / sağ: Folder dropdown’lar + News + Donate
- Sağ aksiyon: Primary tarzı **Get in touch** butonu
- Mobile: Burger menü + overlay nav (`overlay-nav`)

**Davranış:**
- `tweak-fixed-header: true` → kaydırınca sabit kalır
- `tweak-transparent-header: false` → solid arka plan
- Logo yüksekliği: desktop **64px**, mobile max **30px**
- Dikey padding: desktop **1vw**, mobile **6vw**
- Genişlik: Full

**Dropdown (folder) UX:**
- Desktop’ta hover ile açılan folder panelleri
- Her folder’ın kendi “index” sayfası da listedeki ilk item (örn. About Us hem folder title hem child)
- Mobile’da drill-down: `Folder: About` → `Back` + child linkler

**Breakpoint:**
- Desktop header gizlenir: `(pointer: coarse && max-width 1024px)` **veya** `max-width: 799px`
- Yani ~800px altı ve dokunmatik tabletlerde burger menü

### 3.2 Footer

Neredeyse tüm sayfalarda aynı **site-wide footer section** (theme: `black-bold`):

1. Kısa misyon metni + beyaz logo
2. **Stay Updated** newsletter CTA (`Sign up now` → `/newsletter-signup`)
3. **IN PARTNERSHIP WITH** partner logo satırı
4. Sosyal ikonlar: Instagram, YouTube, Facebook, TikTok, X
5. Alt yasal satır: Privacy Policy | Cookie Policy | Global Platform Tender

Footer, sayfa içeriğinden ayrı bir Fluid Engine section olarak her layout’un sonuna eklenmiş.

### 3.3 Ortak sayfa sonu kalıpları

Çoğu içerik sayfasında footer’dan hemen önce:

| Kalıp | Theme | İçerik |
|-------|-------|--------|
| **Join the Race CTA** | `bright` (magenta) | Eyebrow “JOIN THE RACE” + headline + GET STARTED |
| **Footer / Stay Updated** | `black-bold` | Newsletter + sosyal + partnerler |

---

## 4. Tasarım sistemi

### 4.1 Renk paleti (Squarespace section themes)

| Token | HSL | Yaklaşık HEX | Kullanım |
|-------|-----|--------------|----------|
| Black | `267.27, 100%, 2.16%` | `#05000B` | Ana koyu zemin, header/footer |
| White | `0, 0%, 100%` | `#FFFFFF` | Açık zemin / metin |
| Accent | `310.24, 69.49%, 34.71%` | `#961B81` | Magenta CTA band’leri, vurgu |
| Light Accent | `240, 15.79%, 96.27%` | `#F3F3F6` | Açık gri-lavanta section |
| Dark Accent | `267.5, 19.67%, 23.92%` | `#3B3048` | Destekleyici koyu mor |

**Section theme eşlemesi:**

| Theme | Karakter |
|-------|----------|
| `black` / `black-bold` | Koyu zemin, beyaz tipografi; hero ve footer |
| `light-bold` | Açık zemin, koyu metin; kart / içerik grid’leri |
| `white-bold` | Beyaz/açık alternatif içerik section |
| `bright` | Magenta dolgu; quote band ve ana CTA |
| `bright-inverse` | Magenta üzerinde ters kontrast (Find Us) |
| `white` | Donate hero gibi sade açık hero |

Marka duygusu: F1 siyahı + magenta değil klasik kırmızı; eğitim kurumsalına yakın mor-magenta.

### 4.2 Tipografi

| Rol | Font | Stil | Ağırlık | Transform | Letter-spacing | Line-height |
|-----|------|------|---------|-----------|----------------|-------------|
| Heading | **Magistral Web** | italic | 700 | capitalize | `0.01em` | `1.3em` |
| Body | **Macho Modular** | normal | 400 | none | `0.02em` | `1.5em` |
| Meta | Magistral Web | italic | 400 | none | `0.01em` | `1em` |
| Primary button | Magistral Web | italic | 500 | **uppercase** | `0.1em` | `1.2em` / `1rem` |
| Secondary / Tertiary button | Magistral Web | italic | 500 | uppercase | `0.05em` | `1.2em` / `1.1rem` |

**Heading scale:**

| Seviye | Size |
|--------|------|
| H1 | `6rem` |
| H2 | `4rem` |
| H3 | `3rem` |
| H4 | `2rem` |

**Custom CSS override (≤640px):**
- H1 → `46px` / lh `1.2`
- H2 → `34px` / lh `1.1`
- H4 → `24px` / lh `1.1`

Tipografi karakteri: Italik display başlıklar “yarış / hız” hissi verir; body daha teknik / condensed bir sans.

### 4.3 Butonlar

| Tip | Style | Shape | Radius | Padding | Stroke |
|-----|-------|-------|--------|---------|--------|
| Primary | Solid | Rounded | `5.6px` | `2.2rem × 1.5rem` | `0` |
| Secondary | Outline | Rounded | `5.6px` | `2.2rem × 1.5rem` | `2px` |
| Tertiary | Outline | Rounded | `5.6px` | `2.2rem × 1.5rem` | `2px` |

Metin her zaman **UPPERCASE + italic Magistral**. CTA kopyaları tekrarlı: `GET STARTED`, `LEARN MORE`, `SIGN UP NOW`, `GET IN TOUCH`.

### 4.4 Spacing & grid

- **maxPageWidth:** `1359px`
- **pagePadding / site gutter:** `3vw`
- **Mobile gutter:** `6vw`
- Layout motoru: **Squarespace Fluid Engine**
  - Tipik kolon sistemi: 8 kolonlu grid + yan `minmax(gutter, 1fr)` rayları
  - Satırlar: `repeat(N, minmax(24px, auto))` — section’a göre 9–52 satır
  - Block’lar grid cell’lere absolute-ish placement ile oturtuluyor
- Section genişliği çoğunlukla `background-width--full-bleed` + `content-width--wide` / inset
- Section yükseklikleri: `small` / `medium` / `custom`

### 4.5 Animasyon

Global Squarespace animasyonları açık:

| Parametre | Değer |
|-----------|-------|
| Enabled | true |
| Type / style | fade |
| Duration | 1.50s |
| Delay | 0.6s |
| Curve | ease |
| Complexity | detailed |

Scroll-into-view’da metin/görseller fade ile beliriyor. Hover’da buton state’leri theme renkleriyle değişir; ayrı karmaşık micro-interaction seti yok (platform default).

Contact sayfasında **marquee** (“Register now for 2026” tekrarı) motion olarak kullanılmış.

---

## 5. Bileşen envanteri (UI components)

Aşağıdakiler sitede tekrar eden, yeniden kullanılabilir UI birimleri:

### 5.1 Chrome / navigasyon
- **SiteHeader** (logo, nav folders, CTA, burger)
- **DesktopNavFolderDropdown**
- **MobileOverlayNav** (folder drill-down + Back)
- **SiteFooter** (misyon, newsletter CTA, partner logos, social, legal)

### 5.2 Section / layout
- **FullBleedSection** (theme + background image/solid)
- **HeroSection** (H1 + kısa paragraf ± CTA ± fotoğraf)
- **EyebrowLabel** (“FOR EDUCATORS”, “OUR GLOBAL IMPACT”, “JOIN THE RACE”)
- **SplitContent** (sol metin / sağ görsel veya tersi)
- **ThreeColumnFeature** (H4 + paragraf × 3)
- **StatsRow** (büyük H1 sayılar + etiketler)
- **StepJourney** (1–2–3 Register / Design / Compete)
- **QuoteBand** (tam genişlik magenta alıntı + attribution)
- **JoinTheRaceCTA** (bright theme banner)
- **NewsletterPromo** (Stay Updated)
- **PartnerLogoStrip**
- **HorizontalRuleDivider** (özellik listelerini ayırır)
- **AccordionFAQ** (Donate, Fusion Fundamentals)
- **MarqueeBanner** (Contact)

### 5.3 Kartlar / listeler
- **AudienceCard** (Teachers / Students / Volunteers / Sponsors)
- **CategoryCard** (Discovery / Primary / Secondary)
- **PartnerCard** (logo + kısa metin + Learn more)
- **ResourceCard** (ikon/görsel + başlık + CTA)
- **DownloadItemRow** (açıklama + format butonları)
- **BlogBasicGridCard** (görsel 3:2, kategori, excerpt)
- **SuccessStoryCard** (blog grid varyasyonu)
- **AmbassadorPortrait** (About Us grid)

### 5.4 Medya
- **BackgroundImageSection** (grad fade overlay’li fotoğraf)
- **InlineImageBlock**
- **VideoBlock** (World Finals highlights)
- **GoogleMapsEmbed** (Find Us — Google My Maps)
- **SocialLinks**

### 5.5 Blog
- **BlogListBasicGrid** (2 kolon, inset width, image above)
- **BlogArticleNarrow** (detay, meta üstte, related içerik)

---

## 6. Ana sayfa — section section

Ana sayfa **10 page-section** + global header/footer.

### Section 1 — Hero (`black-bold`, full-bleed image)
- **Görsel:** Race engineer + sürücü fotoğrafı, gradient fade overlay
- **İçerik:** H1 “Accelerating futures” + misyon cümlesi + `GET STARTED`
- **UX:** Marka vaadi tek bakışta; CTA Find Us’a gider
- **Grid:** ~22 satır Fluid Engine

### Section 2 — Intro + Value props (`light-bold`)
- Program tanımı (9–19 yaş, F1 destekli)
- “In partnership with” logo grupları (Autodesk, Denford, PMIEF, Ansys, Women in Motorsport, UCL)
- 3 özellik: Industry Credibility / Team Collaboration / Classroom to Competition
- **CTA yok** — bilgilendirme odaklı

### Section 3 — Your STEM Racing Journey (`black`, bg image)
- 3 adımlı yolculuk: Register → Design & Make → Compete
- Destekleyici etkinlik fotoğrafları
- `GET STARTED` tekrarı

### Section 4 — Global Impact (`white-bold`)
- Eyebrow: OUR GLOBAL IMPACT
- H2: Inspiring minds, driving futures
- 3 impact maddesi + `Learn more` → impact sayfası
- Altında mini istatistikler: Founded 1999 / Ages 9–19 / Global Impact (65 countries)
- Yan görsel: yarış arenassındaki öğrenci

### Section 5 — Testimonial (`bright`)
- Ryan Clabon alıntısı (F1 Power Unit Engineer)
- Tam genişlik magenta band; tek odak: sosyal kanıt

### Section 6 — For Educators (`black-bold`)
- Eyebrow + H2
- 3 madde: Tools / Free Training / Low-Cost
- `Learn more` → öğretmen sayfası
- Sınıf / proje görseli

### Section 7 — For Students (`white-bold`)
- Mirror layout: Passion / Opportunities / Real-World Skills
- `Learn more` → öğrenci sayfası

### Section 8 — Join the Race CTA (`bright`, bg)
- Kısa headline + `GET STARTED`
- Dönüşüm bandı

### Section 9 — Latest News (`light-bold`)
- Summary / blog preview: 3 kart (görsel + tarih + excerpt)
- `View all news` → `/news`

### Section 10 — Footer (`black-bold`)
- Yukarıdaki SiteFooter içeriği

---

## 7. Sayfa bazlı section analizleri

### 7.1 About Us (`/about-us`) — 8 section
1. **Hero (black):** “About STEM Racing” + tagline  
2. **3 pillar (black-bold):** Inspiring the Future / Global & Inclusive / Supported by F1  
3. **Competition + Impact split (light-bold):** iki metin bloğu + CTA’lar (`Explore the competition`, `Explore our impact`)  
4. **Ambassadors (black-bold):** portre grid + açıklama  
5. **Quote (bright):** elçi / destekçi alıntısı  
6. **Success Stories teaser (light-bold):** özet + summary blok + `Read Success Stories`  
7. **Join the Race CTA**  
8. **Footer**

### 7.2 Our Impact (`/our-impact`) — 7 section
1. Hero (kuruluş amacı)  
2. 3 tema (Global Reach / Breaking Barriers / Inclusive)  
3. **Stats strip:** 29,000+ schools / 11 F1 teams / 65 countries / 2 software partners / 35% female / 2 university scholarships  
4. Global Community narrative + görsel  
5. Classroom to Trackside + Impact Report / Opening Doors görsel-metin blokları  
6. Join the Race CTA  
7. Footer  

### 7.3 The Competition (`/the-competition`) — 5 section
1. Hero  
2. 3 değer (Learn by Racing / Accessible / Skills for Life)  
3. **Categories hub:** Discovery / Primary / Secondary kartları + Explore CTA’ları  
4. Join the Race CTA  
5. Footer  

### 7.4 Discovery / Primary / Secondary — ortak şablon

Bu üç sayfa aynı iskeleti kullanır (Secondary’de class’lar çoğaltılmış):

| # | Pattern |
|---|---------|
| 1 | Dark hero + program tanımı |
| 2 | 3 benefit + opsiyonel embed (video/demo) |
| 3 | “How does it work?” — What’s Involved / Equipment / Competition Levels (HR ile ayrılmış) |
| 4 | Quote band (`bright`) |
| 5–6 | Feature spotlight’lar (resources, equipment, flexible programme…) + CTA |
| Son | Join the Race + Footer |

**Secondary farkı:** Entry / Development / Professional için **üç ayrı tekrarlayan “class detail” section** (light / white / light temaları dönüşümlü).

### 7.5 World Finals 2025 — 14 section
- Hero + narrative  
- Büyük istatistik grid  
- Video highlights  
- Alternating feature rows: Scrutineering / Four-Lane Racing / Champions / Stars / Singapore  
- Event report CTA  
- Galeri / görsel section’lar  
- Standart CTA + Footer  

### 7.6 World Finals 2026 — 9 section
- Tarih/mekan hero (3–8 Oct 2026, Sentosa)  
- Preview narrative + hedef istatistikler  
- “Best in the world” / “Life-changing experience”  
- Quote + CTA + Footer  
- 2025’e göre daha “forward-looking”, daha az recap satırı

### 7.7 Get Involved ailesi
- **Overview:** 4 audience kartı (Teacher/Student/Volunteer/Sponsor)  
- **Persona sayfaları (teacher/student/volunteer/sponsor):** aynı şablon  
  1. Hero + Get started  
  2. “Why …?” 3 sütun  
  3. Derinleşen benefit / rol section (görsellerle)  
  4. Quote  
  5. Ek highlight  
  6. Join the Race  
  7. Footer  

### 7.8 Find Us (`/findus`) — 4 section
1. Minimal hero “Find us”  
2. **bright-inverse:** açıklama + **Google My Maps embed** + `JOIN US`  
3. Join CTA (`GET IN TOUCH`)  
4. Footer  

### 7.9 Partners
- **Hub:** Who We Work With — 5 partner kartı (Ansys, Autodesk, Denford, F1, PMIEF) + Become a partner  
- **Detay sayfaları:** partner hikâyesi, resource linkleri, bazen download / course CTA; Denford ve PMIEF’te `white-bold` section’lar daha sık

### 7.10 Resources & Downloads
- **Resources:** yoğun ResourceCard grid (Learning channel, Equipment, Downloads, Software, PM handbook, Regulations, AI Guidance)  
- **Downloads:** çok satırlı indirme listesi; her item için format butonları (AI, DXF, STL, ZIP, PNG) — pratikte bir **download catalog UI**

### 7.11 Fusion Fundamentals
- Hero + why (3 benefit)  
- **CAD / CAM kurs kartları** + ülke butonları (UK/US/DE/IN) + tarih kayıt linkleri  
- Quote  
- **Accordion FAQ**  
- CTA + Footer  

### 7.12 News & Success Stories
- Liste: **Blog Basic Grid**, 2 kolon, görsel oranı **3:2**, inset genişlik, excerpt açık, primary meta none / secondary categories  
- Detay: **narrow article** (`tweak-blog-item-width: Narrow`, custom 75), meta title üstünde, author profile kapalı, related içerik var  
- Success Stories hero’su `bright` theme ile ayrışır; listeden sonra Join the Race gelir

### 7.13 Donate — 6 section
1. Açık hero (`white`)  
2. “What your donation enables” 3 sütun  
3. (Boş / spacer veya gizlenmiş section)  
4. “Give what you want” + bağış embed alanı (form içeriği analiz dışı)  
5. FAQ accordion  
6. Footer  

### 7.14 Contact — 4 section
1. “Contact us” hero  
2. Marquee: “Register now for 2026”  
3. “Send us a message” + adres + form bloğu (alanlar analiz dışı)  
4. Footer  

---

## 8. Responsive davranış

### 8.1 Breakpoint’ler (pratik)

| Aralık | Davranış |
|--------|----------|
| **> 799px** (ve fine pointer) | Desktop header, multi-column Fluid grid’ler |
| **≤ 799px** veya coarse ≤1024 | Burger + overlay nav; logo ≤30px |
| **≤ 767px** | Birçok block’ta mobil özel CSS kancaları |
| **≤ 640px** | H1/H2/H4 font override (custom.css) |
| **Fluid Engine** | Grid kolonları stack olur; `sqs-mobile-site-gutter: 6vw` |

### 8.2 Layout adaptasyonu
- 2–3–4 kolon feature grid’leri mobilde tek kolona düşer
- Hero’da metin üstte, görsel alta (veya background olarak tam alan)
- Blog basic grid 2 → 1 kolon
- Stats satırları dikey stack
- Header CTA mobilde overlay içinde veya sadeleşmiş aksiyon alanında
- Find Us haritası embed tam genişlik, yükseklik sabit kalabilir (kaydırma UX’i dikkat)

### 8.3 Tipografi responsive
- Rem tabanlı büyük H1 (6rem) masaüstünde “poster” etkisi
- 640px altında px clamp ile okunabilirliğe çekiliyor
- Butonlar uppercase + geniş letter-spacing; mobilde padding hâlâ rahat tıklanır (`1.5rem` dikey)

### 8.4 Touch / motion
- Global fade animasyonları mobilde de aktif (detailed)
- Dropdown’lar mobilde hover yerine tap + drill-down
- Marquee sürekli kayar (Contact) — dikkat dağıtıcı olabilir

---

## 9. UX gözlemleri (yalnızca arayüz)

**Güçlü yönler**
- Tutarlı section ritmi: dark → light → bright CTA
- Net persona ayrımı (Teacher / Student / Volunteer / Sponsor)
- Competition yaş bantları menüde açık etiketlenmiş
- Sosyal kanıt (alıntılar, alumni, World Finals stats) sık kullanılmış
- Kaynak / download yüzeyi kapsamlı

**Zayıf / tutarsız noktalar (UI/UX)**
- Bazı CTA hedef URL’leri kırık veya tutarsız (`/contact-1`, `/success-stories`)
- Header’da boş cart göstergesi kafa karıştırıcı
- H1 scale çok büyük; mobilde custom override’a bağımlı
- Başlık capitalize + italic kombinasyonu uzun başlıklarda dalgalı görünüm
- “GET STARTED” her yerde aynı kopya; bağlam (öğrenci vs öğretmen) ayrışmıyor
- Downloads sayfası buton yoğunluğu yüksek; tarama maliyeti fazla
- Success story slug’larında placeholder isimler (`blog-post-title-…`) kalmış olabilir
- Formlar / donate embed’ler bu analizin dışında; görsel olarak section içinde “yabancı widget” hissi verebilir

---

## 10. Yeniden üretim için sayfa şablonları

Bir clone / yeniden yazımda şu **page templates** yeterli olur:

1. **MarketingHome** — 10 section’lı landing  
2. **StandardContent** — Hero + 3-up + split + quote + CTA + footer  
3. **ProgramDetail** — Discovery/Primary şablonu  
4. **ProgramDetailMultiClass** — Secondary  
5. **PersonaPage** — Get Involved alt sayfaları  
6. **StatsCampaign** — Impact / World Finals  
7. **HubCards** — Competition / Partners / Get Involved overview / Resources  
8. **CatalogDownloads** — Downloads  
9. **CourseLanding** — Fusion Fundamentals (+ accordion)  
10. **BlogIndex / BlogArticle**  
11. **MapLocator** — Find Us  
12. **Utility** — Contact, Donate, Legal, Newsletter  

---

## 11. Teknik UI notları (frontend bağlamı)

- CMS/page builder: Squarespace Fluid Engine section + block’lar (`html`, `image`, `button`, `summary`, `embed`, `video`, `accordion`, `marquee`, `form`, `socialaccountlinks`, `horizontalrule`)
- Theme sistemi section bazlı CSS değişkenleriyle (`data-section-theme`)
- Fontlar Adobe/Typekit hattı üzerinden (`magistral-web`, `machomodular`)
- Custom CSS minimal: yalnızca mobil heading scale + list indent
- E-ticaret / cart UI kalıntısı mevcut ama ürün kataloğu ana IA’da değil

---

## 12. Sonuç

STEM Racing sitesi, güçlü bir **marka + eğitim marketing** UI’sına sahip: koyu-mor palet, italik display tipografi, full-bleed fotoğraf ve tekrarlayan CTA band’leriyle tutarlı bir deneyim sunuyor. Bilgi mimarisi net (Competition / Get Involved / Partners / Resources). Yeniden geliştirmede asıl iş, Squarespace Fluid section’larını yukarıdaki **component + template** setine taşımak; form/backend bu fazın dışında bırakılmalı.

**Sonraki adım (istendiğinde):** Bu dokümana göre wireframe, design token dosyası veya Next.js/React component iskeleti çıkarılabilir — henüz kod yazılmadı.
