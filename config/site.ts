import { link } from "fs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sebastián Yepes",
  description: "Below you will find the development of my portfolio as a web programmer.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About me",
      href: "/",
    },
    {
      label: "Resume",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About me",
      href: "/",
    },
    {
      label: "Resume",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/sebastianym",
    linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-yepes-marta-b2016a2aa",
  },
};
