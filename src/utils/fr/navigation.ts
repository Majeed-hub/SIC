
const navBarLinks = [
  { name: "الرئيسية", url: "/fr" },
  { name: "المنتجات", url: "/fr/products" },
  { name: "المدونة", url: "/fr/blog" },
  { name: "من نحن", url: "/fr/about" },
  { name: "اتصل بنا", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "روابط سريعة",
    links: [
      { name: "المنتجات", url: "/fr/products" },
      { name: "من نحن", url: "/fr/about" },
      { name: "اتصل بنا", url: "fr/contact" },
      { name: "المدونة", url: "/fr/blog" },
    ],
  },
  {
    section: "",
    links: [
      { name: "آراء العملاء", url: "/fr/products/#testimonials" },
      { name: "عملاؤنا", url: "#" },
      { name: "الأسئلة الشائعة", url: "/fr/#faqs" },
    ],
  },
];


const socialLinks = {
  facebook: "#",
  x: "#",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};