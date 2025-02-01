// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/services" },
  { name: "Contact", url: "/contact" },

];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick links",
    links: [
      { name: "Products", url: "/products" },
      { name: "About Us", url: "/services" },
      { name: "Contact us", url: "#" },
      { name: "Blog", url: "/blog" },

    ],
  },
  {
    section: "",
    links: [
      { name: "Testimonials", url: "#" },
      { name: "Our Clients", url: "#" },
      { name: "Faq", url: "#" },

     
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