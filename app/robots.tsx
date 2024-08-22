import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://landing-page-taupe-five-79.vercel.app/sitemap.xml",
  };
}
