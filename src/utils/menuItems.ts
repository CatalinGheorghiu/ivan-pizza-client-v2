export type MenuItem = {
  label: string;
  url: string;
};

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "Menu",
    url: "/menu"
  },
  {
    label: "Create your pizza",
    url: "/pizza/create"
  },
  {
    label: "About",
    url: "/about"
  },
  {
    label: "Contact",
    url: "/contact"
  }
];
