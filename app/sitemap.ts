import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.spisum.cz",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/modules",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/support",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/partner",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/consent",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.spisum.cz/ai",
      lastModified: new Date(),
    },
  ];
}
