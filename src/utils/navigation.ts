// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Products", url: "/products" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },

];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick links",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Products", url: "/products" },
      { name: "Contact us", url: "/contact" },
      { name: "Blog", url: "/blog" },

    ],
  },
  {
    section: "",
    links: [
      // { name: "Testimonials", url: "/products/#testimonials" },
      { name: "Our Clients", url: "/#clients"},
      { name: "Faq", url: "/#faqs" },

     
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/qipf18/",
  x: "https://twitter.com/",
  
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};