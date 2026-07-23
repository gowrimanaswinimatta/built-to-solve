import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/products",
    "/lab",
    "/lab/hirepulse",
    "/thinking",
    "/experience",
    "/contact",
    ...products.map((p) => `/products/${p.slug}`),
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
