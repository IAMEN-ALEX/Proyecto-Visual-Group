"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./ui/button";
import { Menu, X } from "lucide-react";
import GooeyNav from "./ui/gooey-nav";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Map navLinks to GooeyNav format
    const gooeyItems = navLinks.map(link => ({
        label: link.name,
        href: link.href
    }));

    // Find initial active index based on current pathname
    const initialActiveIndex = navLinks.findIndex(link => link.href === pathname);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 h-20"
        >
            {/* Premium Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

            <Container className="relative flex h-full items-center justify-between">
                {/* Logo with enhanced glow */}
                <Link href="/" className="flex items-center gap-3 group relative z-10" prefetch={true}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 via-purple-600 to-blue-500 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all group-hover:scale-110" />
                    </div>
                    <span className="font-serif text-xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                        Visual Group Chile
                    </span>
                </Link>

                {/* Desktop Navigation with GooeyNav - Enhanced */}
                <nav className="hidden md:block relative z-10">
                    <div className="relative">
                        {/* Subtle glow behind nav */}
                        <div className="absolute inset-0 bg-purple-500/5 blur-xl rounded-full" />
                        <GooeyNav
                            items={gooeyItems}
                            particleCount={15}
                            timeVariance={300}
                            particleR={100}
                            initialActiveIndex={initialActiveIndex >= 0 ? initialActiveIndex : 0}
                            animationTime={500}
                            particleDistances={[90, 10]}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />
                    </div>
                </nav>

                {/* Mobile Menu Button - Enhanced */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-10 rounded-xl p-3 bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </Container>

            {/* Mobile Navigation - Enhanced */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="bg-gradient-to-b from-slate-950/98 to-slate-950/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
                            <Container>
                                <nav className="flex flex-col gap-2 py-6">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                prefetch={true}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block text-base font-medium transition-all duration-300 px-6 py-3 rounded-xl relative overflow-hidden group",
                                                    pathname === link.href
                                                        ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 shadow-lg shadow-purple-500/20"
                                                        : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                                                )}
                                            >
                                                {/* Hover glow effect */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <span className="relative">{link.name}</span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </Container>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
