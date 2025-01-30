// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick links",
    links: [
      { name: "About us", url: "Aboutus" },
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
      { name: "Contact us", url: "/Contact us" },

    ],
  },
  {
    section: "",
    links: [
      { name: "Testimonials", url: "#" },
      { name: "Blogs", url: "/blog" },
      { name: "Our Clients", url: "#" },
    ],
  },
];
// An object of links for social icons
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