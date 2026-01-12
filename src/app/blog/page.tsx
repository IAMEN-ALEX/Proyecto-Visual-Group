"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { blogPosts, BlogPost } from "@/lib/blog-data";
import { Calendar, ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarBorder from "@/components/ui/star-border";
import GradientText from "@/components/ui/gradient-text";
import Iridescence from "@/components/ui/iridescence"; // Optimized Background
import SplineEmbed from "@/components/ui/spline-embed";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } }
};

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 relative overflow-hidden">
            {/* Optimized Native Background (No iframe) */}
            {/* Optimized Native Background (No iframe) */}
            <div className="fixed inset-0 z-0 opacity-40">
                <SplineEmbed />
            </div>

            <Navbar />

            <main className="flex-1 py-32 z-10 relative">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <GradientText
                            colors={["#fa3556ff", "#4aeb35ff", "#4079ff", "#4079ff", "#40ffaa", "#cb2bf3ff"]}
                            animationSpeed={4}
                            showBorder={false}
                            className="mb-4 font-serif text-4xl font-bold md:text-6xl"
                        >
                            Nuestro Blog
                        </GradientText>
                        <p className="mx-auto max-w-2xl text-lg text-slate-400">
                            Inspiración y actualidad en eventos, diseño visual y tecnología aplicada a experiencias únicas.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start"
                    >
                        {blogPosts.map((post, index) => (
                            <motion.div key={post.slug} variants={itemVariants}>
                                <BlogCard post={post} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </main>

            <Footer />
        </div >
    );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const linkHref = post.externalLink || `/blog/${post.slug}`;
    const linkTarget = post.externalLink ? "_blank" : undefined;

    return (
        <Card className="h-full overflow-hidden border-0 bg-slate-900/50 p-0 transition-all hover:bg-slate-900/80 will-change-transform">
            <Link href={linkHref} target={linkTarget} className="block">
                <div className="aspect-video w-full bg-slate-800 relative overflow-hidden group">
                    {/* Blog Image */}
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                    {/* Hover Purple Tint */}
                    <motion.div
                        className="absolute inset-0 bg-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="absolute bottom-4 left-4 z-10">
                        <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            {post.category}
                        </span>
                    </div>
                </div>
            </Link>

            <div className="p-6">
                <div className="mb-3 flex items-center text-xs text-slate-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                </div>

                <Link href={linkHref} target={linkTarget} className="block">
                    <h2 className="mb-3 font-serif text-xl font-bold text-white hover:text-purple-400 transition-colors">
                        {post.title}
                    </h2>
                </Link>

                <p className="mb-4 text-sm text-slate-400">
                    {post.excerpt}
                </p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div
                                className="mt-4 border-t border-white/5 pt-4 text-sm text-slate-300 [&>p]:mb-4 [&>h2]:mb-2 [&>h2]:mt-4 [&>h2]:font-bold [&>h2]:text-white"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 focus:outline-none"
                    >
                        {isExpanded ? (
                            <>
                                Leer menos <ArrowUp className="ml-1 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Leer más <ArrowRight className="ml-1 h-4 w-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </Card>
    );
}
