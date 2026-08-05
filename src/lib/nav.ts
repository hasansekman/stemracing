export type NavChild = {
  label: string;
  href: string;
};

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "folder";
      label: string;
      href: string;
      children: NavChild[];
    };

export const mainNav: NavItem[] = [
  {
    type: "folder",
    label: "Hakkımızda",
    href: "/about-us",
    children: [
      { label: "Hakkımızda", href: "/about-us" },
      { label: "Etkimiz", href: "/our-impact" },
      { label: "Başarı Hikâyeleri", href: "/successstories" },
    ],
  },
  {
    type: "folder",
    label: "Yarışma",
    href: "/the-competition",
    children: [
      { label: "Yarışma", href: "/the-competition" },
      { label: "Discovery (6+)", href: "/discovery" },
      { label: "Primary (9-11)", href: "/primary" },
      { label: "Secondary (11-19)", href: "/secondary" },
      {
        label: "Aramco STEM Racing Dünya Finalleri 2025",
        href: "/aramco-stem-racing-world-finals",
      },
      {
        label: "Aramco STEM Racing Dünya Finalleri 2026",
        href: "/aramco-stem-racing-world-finals-2026",
      },
    ],
  },
  {
    type: "folder",
    label: "Katılın",
    href: "/get-involved/overview",
    children: [
      { label: "Nasıl Katılırım?", href: "/get-involved/overview" },
      { label: "Öğretmenler", href: "/get-involved/teacher" },
      { label: "Öğrenciler", href: "/get-involved/student" },
      { label: "Gönüllüler", href: "/get-involved/volunteer" },
      { label: "Sponsorlar", href: "/get-involved/sponsor" },
      { label: "Bizi Bulun", href: "/findus" },
    ],
  },
  {
    type: "folder",
    label: "Partnerler",
    href: "/partners/our-partners",
    children: [
      { label: "Partnerlerimiz", href: "/partners/our-partners" },
      { label: "Ansys", href: "/partners/ansys" },
      { label: "Autodesk", href: "/partners/autodesk" },
      { label: "Denford", href: "/partners/denford" },
      { label: "PMIEF", href: "/partners/pmief" },
    ],
  },
  {
    type: "folder",
    label: "Kaynaklar",
    href: "/resources",
    children: [
      { label: "Tüm Kaynaklar", href: "/resources" },
      { label: "İndirmeler", href: "/downloads" },
      { label: "Fusion Fundamentals", href: "/fusion-fundamentals" },
    ],
  },
  { type: "link", label: "Haberler", href: "/news" },
  { type: "link", label: "Bağış Yap", href: "/donate" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/STEMRacingHQ",
  },
] as const;

export const siteConfig = {
  name: "STEM Racing Türkiye",
  shortName: "STEM Racing",
  url: "https://www.stemracing.com",
  description:
    "STEM Racing, öğrencilerin motorsport ve mühendislik yoluyla STEM becerileri kazandığı, Formula 1® destekli küresel eğitim yarışmasıdır.",
  locale: "tr_TR",
  mission:
    "Engelleri kaldıran, yeteneği besleyen ve STEM, motorsport ile ötesinde geleceğin kariyerlerine ilham veren küresel bir eğitim girişimiyiz.",
  address:
    "STEM RACING Ltd, Armytage Rd, Brighouse, West Yorkshire, HD6 1QF - İNGİLTERE",
} as const;
