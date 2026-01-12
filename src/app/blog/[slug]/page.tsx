import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

// In Next.js 15, params is a Promise, but in 14 it's usually direct object, 
// unless using async page components which is recommended.
// We'll stick to standard async function component.

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 py-32">
                <Container className="max-w-4xl">
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center text-sm font-medium text-slate-400 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Blog
                    </Link>

                    <article>
                        <header className="mb-10 text-center">
                            <div className="mb-6 flex items-center justify-center gap-4 text-sm text-slate-400">
                                <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> {post.date}</span>
                                <span className="flex items-center"><User className="mr-1 h-4 w-4" /> Visual Group Team</span>
                                <span className="rounded-full bg-purple-600/20 px-3 py-0.5 text-purple-300 border border-purple-500/30">
                                    {post.category}
                                </span>
                            </div>
                            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                                {post.title}
                            </h1>
                            <p className="mx-auto max-w-2xl text-xl text-slate-400 italic">
                                {post.excerpt}
                            </p>
                        </header>

                        {/* Featured Image Placeholder */}
                        <div className="mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-white/10">
                            <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                <span className="text-slate-600">Imagen Principal: {post.title}</span>
                            </div>
                        </div>

                        <div
                            className="prose prose-invert prose-lg mx-auto prose-headings:font-serif prose-headings:font-bold prose-p:text-slate-300 prose-a:text-purple-400"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
