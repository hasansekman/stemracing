import { images } from "@/data/images";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  body: string[];
};

export const newsPosts: BlogPost[] = [
  {
    slug: "stem-racing-at-the-british-grand-prix",
    title: "STEM Racing, Formula 1® İngiltere Grand Prix’sinde",
    excerpt:
      "Silverstone’daki İngiltere Grand Prix haftasında 100’den fazla STEM Racing öğrencisi, Aston Martin Aramco Formula One™ Team, Maaden ve Aramco ile özel deneyimlere katıldı.",
    date: "2026-07-07",
    category: "Etkinlikler",
    image:
      images.news1,
    author: "Rebecca Atkinson",
    body: [
      "Silverstone’daki İngiltere Grand Prix haftasında 100’den fazla STEM Racing öğrencisi, Aston Martin Aramco Formula One™ Team, Maaden ve Aramco ile bir dizi özel deneyime katıldı.",
      "Garaj turlarından mühendislik atölyelerine kadar öğrenciler, sınıfta kazandıkları becerilerin motorsportun en üst seviyesindeki kariyerlere nasıl dönüştüğünü yakından gördü.",
      "Hafta, STEM Racing’in misyonunu bir kez daha pekiştirdi: engelleri kaldırmak, yeteneği beslemek ve eğitimi sektörle buluşturmak.",
    ],
  },
  {
    slug: "university-of-warwick-set-to-inspire-next-generation-of-engineers",
    title:
      "University of Warwick ve Maaden, yeni nesil mühendislere ilham vermeye hazırlanıyor",
    excerpt:
      "University of Warwick, STEM Racing, Maaden ve Aston Martin Aramco Formula One™ Team iş birliğiyle Motorsport Valley’nin ilk STEM Racing Mükemmeliyet Merkezi seçildi.",
    date: "2026-07-06",
    category: "Ortaklıklar",
    image:
      images.news2,
    author: "Rebecca Atkinson",
    body: [
      "University of Warwick, Motorsport Valley’nin ilk STEM Racing Mükemmeliyet Merkezi olarak açıklandı.",
      "Aston Martin Technology Campus’te duyurulan ortaklık, bölgedeki okulların yüksek nitelikli STEM öğrenme deneyimlerine erişimini genişletecek.",
      "Mükemmeliyet Merkezi modeli; iyi uygulamaları, kaynakları ve sektör bağlantılarını daha geniş STEM Racing topluluğuyla paylaşacak.",
    ],
  },
  {
    slug: "international-pmo-day-2026-with-erina-wan-zul",
    title: "Uluslararası PMO Günü 2026: Erina Wan Zul ile söyleşi",
    excerpt:
      "Erina Wan Zul’un STEM Racing ve PMIEF sayesinde edindiği proje yönetimi becerilerini eğitim, liderlik ve sporda nasıl kullandığını keşfedin.",
    date: "2026-05-11",
    category: "Mezunlar",
    image:
      images.news3,
    author: "STEM Racing",
    body: [
      "Uluslararası PMO Günü’nde Erina Wan Zul, STEM Racing’den edindiği proje yönetimi becerilerinin eğitim, liderlik ve spor yolculuğunu nasıl şekillendirdiğini paylaştı.",
      "Project Management Institute Educational Foundation (PMIEF) ile birlikte STEM Racing, profesyonel proje becerilerini öğrenci deneyiminin merkezine yerleştirmeye devam ediyor.",
    ],
  },
  {
    slug: "how-lunar-used-ansys-autodesk-to-become-world-champions",
    title:
      "Lunar, Ansys ve Autodesk ile nasıl dünya şampiyonu oldu?",
    excerpt:
      "Avustralya’dan Lunar’ın CFD ve CAD araçlarını birleştirerek Aramco STEM Racing Dünya Finalleri 2025’te nasıl zirveye çıktığına yakından bakış.",
    date: "2026-03-20",
    category: "Yarışma",
    image:
      images.news4,
    author: "STEM Racing",
    body: [
      "Lunar’ın şampiyonluk kampanyası, ücretsiz endüstri yazılımlarının öğrenci mühendisliğinde nasıl fark yarattığını ortaya koydu.",
      "Tasarım için Autodesk Fusion, aerodinamik analiz için Ansys kullanan ekip, her değerlendirme kriterinde aracını geliştirmeyi sürdürdü.",
    ],
  },
  {
    slug: "aramco-stem-racing-world-finals-2026-technical-regulations",
    title:
      "Aramco STEM Racing Dünya Finalleri 2026: Teknik regülasyonları anlamak",
    excerpt:
      "Singapur 2026’ya hazırlanan ekipler için teknik ve yarışma regülasyonu güncellemelerine pratik bir rehber.",
    date: "2026-02-12",
    category: "Kaynaklar",
    image:
      images.news5,
    author: "STEM Racing",
    body: [
      "2026 Dünya Finalleri teknik regülasyonları; hassasiyeti, yeniliği ve adil yarışmayı ödüllendirmek üzere tasarlandı.",
      "Ekiplerin üretim ve etkinlik kaydından önce hem teknik hem de yarışma belgelerini dikkatle incelemesi gerekir.",
    ],
  },
  {
    slug: "maaden-and-stem-racing-launch-global-partnership",
    title: "Maaden ve STEM Racing küresel STEM eğitimi ortaklığını başlattı",
    excerpt:
      "Maaden ve STEM Racing, uygulamalı STEM eğitimine erişimi genişletmeye odaklanan küresel bir ortaklık duyurdu.",
    date: "2026-01-28",
    category: "Ortaklıklar",
    image:
      images.news6,
    author: "STEM Racing",
    body: [
      "Ortaklık; etkinlikleri, öğrenme kaynaklarını ve öğrencileri sektör mentorlarıyla buluşturan fırsatları destekleyecek.",
      "Maaden ve STEM Racing birlikte, geleceğin mühendislerine ve yenilikçilerine ilham vermeyi hedefliyor.",
    ],
  },
];

export const successStories: BlogPost[] = [
  {
    slug: "jamesmitchell",
    title:
      "James Mitchell — Aston Martin Aramco Formula 1™ Team PIV Mühendisi",
    excerpt:
      "STEM Racing ile ilk kez ilkokulda tanışan James, bugün bir Formula 1 takımında kariyer yolculuğunu sürdürüyor.",
    date: "2025-11-12",
    category: "Mezunlar",
    image:
      images.success1,
    author: "Rebecca Atkinson",
    body: [
      "James Mitchell, STEM Racing’e ilkokulda katıldı ve mühendislik problem çözmeye olan tutkusunu hızla keşfetti.",
      "Bugün Aston Martin Aramco Formula 1™ Team’de PIV Mühendisi olarak çalışıyor — bu yolculuğu programın tasarım, ekip çalışması ve gerçek yarışma karışımına borçlu olduğunu söylüyor.",
    ],
  },
  {
    slug: "ryanclabon",
    title: "Ryan Clabon, Mercedes-AMG HPP",
    excerpt:
      "STEM Racing, bugün Formula 1’de Power Unit Mühendisi olan Ryan Clabon için hayat değiştirici oldu.",
    date: "2025-09-03",
    category: "Mezunlar",
    image:
      images.success2,
    author: "STEM Racing",
    body: [
      "“STEM Racing hayatımı değiştirdi. Bana çok sayıda beceri kazandırdı, sayısız fırsat yarattı ve bugün Formula 1’deki hayalimdeki role sahip olmamın nedeni.”",
      "Ryan’ın hikâyesi, sınıf ekiplerinden profesyonel motorsport kariyerlerine uzanan birçok mezun yolculuğundan yalnızca biri.",
    ],
  },
  {
    slug: "javier-gladstone-contioso",
    title:
      "Javier Gladstone Contioso — Mercedes-AMG HPP Mekanik Mühendislik Stajyeri",
    excerpt:
      "Ortaöğretim yarışmasından Mercedes-AMG High Performance Powertrains’te mekanik mühendislik stajına uzanan bir yol.",
    date: "2025-08-18",
    category: "Mezunlar",
    image:
      images.success3,
    author: "STEM Racing",
    body: [
      "Javier’in STEM Racing deneyimi, rekabetçi bir sektör stajı için gereken teknik derinliği ve iletişim becerilerini geliştirmesine yardımcı oldu.",
    ],
  },
  {
    slug: "logan-griffiths",
    title: "Logan Griffiths — Mercedes-AMG HPP Üretim Çırağı",
    excerpt:
      "STEM Racing’de kazandığı uygulamalı üretim becerileri, Logan’ın çıraklık yolunu açtı.",
    date: "2025-07-01",
    category: "Mezunlar",
    image:
      images.success4,
    author: "STEM Racing",
    body: [
      "Logan’ın hikâyesi, STEM Racing’in yalnızca üniversite yollarını değil; çıraklık ve teknisyen kariyerlerini de desteklediğini gösteriyor.",
    ],
  },
  {
    slug: "emilylatham",
    title: "Emily Latham: BMW’de Pazarlama Planlama ve Strateji Yöneticisi",
    excerpt:
      "Emily’nin STEM Racing’deki markalaşma ve sponsorluk deneyimi, saf mühendisliğin ötesinde kapılar açtı.",
    date: "2025-05-22",
    category: "Mezunlar",
    image:
      images.success5,
    author: "STEM Racing",
    body: [
      "STEM Racing ekipleri markalaşma, sponsorluk ve sunumu mühendislik kadar ciddiye alır — Emily bu deneyimi bir pazarlama kariyerine dönüştürdü.",
    ],
  },
  {
    slug: "lewis-fowler",
    title:
      "Lewis Fowler: Aston Martin Aramco Formula 1 Team’de Mezun Tasarım Mühendisi – Aerodinamik",
    excerpt:
      "Yarışmada filizlenen aerodinamik tutkusu, Lewis’i mezun tasarım mühendisliği rolüne taşıdı.",
    date: "2025-04-10",
    category: "Mezunlar",
    image:
      images.success6,
    author: "STEM Racing",
    body: [
      "Minyatür araçlar üzerinde CFD denemelerinden profesyonel aero geliştirmeye uzanan Lewis’in yolu, STEM Racing etkisinin uzun vadeli gücünü gösteriyor.",
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}

export function getSuccessBySlug(slug: string) {
  return successStories.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
