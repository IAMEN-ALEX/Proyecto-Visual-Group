"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group cursor-pointer",
    {
        variants: {
            variant: {
                primary:
                    "bg-gradient-to-br from-purple-500/20 via-purple-600/15 to-blue-600/20 text-white backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(147,51,234,0.25),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_48px_0_rgba(147,51,234,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:border-white/30 hover:from-purple-500/30 hover:via-purple-600/25 hover:to-blue-600/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
                secondary:
                    "bg-gradient-to-br from-slate-700/60 via-slate-800/50 to-slate-900/60 text-white backdrop-blur-2xl border border-slate-500/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:border-slate-400/40 hover:from-slate-600/60 hover:via-slate-700/50 hover:to-slate-800/60 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
                outline:
                    "border-2 border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/40 text-white shadow-[0_4px_24px_0_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.25)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
                ghost:
                    "hover:bg-white/10 hover:text-white backdrop-blur-sm text-white/90 hover:backdrop-blur-xl transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(255,255,255,0.1)]",
            },
            size: {
                sm: "h-9 px-5 text-sm",
                md: "h-11 px-8 text-base",
                lg: "h-14 px-10 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size">, VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
