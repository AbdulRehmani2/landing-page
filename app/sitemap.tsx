import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://landing-page-taupe-five-79.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
