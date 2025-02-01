
const navBarLinks = [
  { name: "الرئيسية", url: "/" },
  { name: "المنتجات", url: "/products" },
  { name: "المدونة", url: "/blog" },
  { name: "من نحن", url: "/services" },
  { name: "اتصل بنا", url: "/contact" },
];

const footerLinks = [
  {
    section: "روابط سريعة",
    links: [
      { name: "المنتجات", url: "/products" },
      { name: "من نحن", url: "/services" },
      { name: "اتصل بنا", url: "#" },
      { name: "المدونة", url: "/blog" },
    ],
  },
  {
    section: "",
    links: [
      { name: "آراء العملاء", url: "#" },
      { name: "عملاؤنا", url: "#" },
      { name: "الأسئلة الشائعة", url: "#" },
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