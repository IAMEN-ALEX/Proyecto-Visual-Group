"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./ui/button"; // Restored original import path
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-slate-950/50 backdrop-blur-md"
        >
            <Container className="flex h-full items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 group-hover:animate-pulse" />
                    <span className="font-serif text-xl font-bold tracking-tight text-white">
                        Visual Group Chile
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-white",
                                pathname === link.href ? "text-white" : "text-slate-400"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-[30px] left-0 right-0 h-[2px] bg-purple-500"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/5 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-white py-2",
                                        pathname === link.href ? "text-purple-400" : "text-slate-400"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
