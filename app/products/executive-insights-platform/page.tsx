import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { getProduct } from "@/data/products";
const product = getProduct("executive-insights-platform");
export const metadata: Metadata = { title: product?.title ?? "Product", description: product?.positioning };
export default function Page(){ if(!product) notFound(); return <CaseStudyPage product={product} />; }
