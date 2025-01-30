// مصفوفة الروابط لشريط التنقل
const navBarLinks = [
  { name: "الصفحة الرئيسية", url: "/" },
  { name: "المنتجات", url: "/products" },
  { name: "الخدمات", url: "/services" },
  { name: "المدونة", url: "/blog" },
  { name: "اتصل بنا", url: "/contact" },
];

// مصفوفة الروابط للتذييل
const footerLinks = [
  {
    section: "روابط سريعة",
    links: [
      { name: "معلومات عنا", url: "" },
      { name: "المنتجات", url: "/products" },
      { name: "الخدمات", url: "/services" },
      { name: "اتصل بنا", url: "#" },
    ],
  },
  {
    section: "",
    links: [
      { name: "الشهادات", url: "#" },
      { name: "المدونات", url: "/blog" },
      { name: "عملاؤنا", url: "#" },
    ],
  },
];

// كائن الروابط لرموز التواصل الاجتماعي
const socialLinks = {
  facebook: "https://www.facebook.com/qipf18/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
