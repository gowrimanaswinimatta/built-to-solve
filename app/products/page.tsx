import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Card, Container, Heading, Section } from "@/components/ui/design";
import { products } from "@/data/products";
export const metadata: Metadata = { title: "Products", description: "Product systems by Gowri Manaswini spanning decision intelligence, pricing automation, and executive insights." };
export default function ProductsPage(){return <><Navbar/><main><Section className="pt-32"><Container><Heading eyebrow="Products" title="Platforms and systems designed for business impact." text="These are not static analytics projects. They are productized systems that make decisions clearer, workflows more reliable, and operational data easier to trust."/></Container></Section><Section><Container><div className="space-y-5">{products.map((p)=><Card key={p.slug}><div className="grid gap-6 lg:grid-cols-[1fr_.75fr_auto]"><div><h2 className="text-3xl font-semibold">{p.title}</h2><p className="mt-3 leading-7 text-zinc-400">{p.summary}</p></div><div className="grid gap-4 text-sm"><p><span className="text-zinc-500">Focus area</span><br/>{p.focus}</p><p><span className="text-zinc-500">Outcome</span><br/>{p.outcome}</p></div><Link className="self-center text-emerald-300 hover:text-emerald-200" href={`/products/${p.slug}`}>Read case study →</Link></div></Card>)}</div><div className="mt-12"><Button href="/contact">Build a clearer system</Button></div></Container></Section></main><Footer/></>}
