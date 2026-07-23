import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BUILT TO SOLVE.",
    short_name: "Built To Solve",
    description: "Turning complexity into clarity.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#05070b",
  };
}
