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
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group cursor-pointer",
    {
        variants: {
            variant: {
                primary:
                    "bg-gradient-to-br from-purple-600/90 to-purple-700/90 text-white backdrop-blur-xl border border-purple-400/30 shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.5)] hover:border-purple-400/50 hover:from-purple-500/90 hover:to-purple-600/90 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
                secondary:
                    "bg-gradient-to-br from-slate-700/80 to-slate-800/80 text-white backdrop-blur-xl border border-slate-600/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:border-slate-500/50 hover:from-slate-600/80 hover:to-slate-700/80",
                outline:
                    "border-2 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 text-white shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_16px_0_rgba(255,255,255,0.2)]",
                ghost:
                    "hover:bg-white/10 hover:text-white backdrop-blur-sm text-white/80 hover:backdrop-blur-md transition-all duration-300",
            },
            size: {
                sm: "h-9 px-4 text-sm",
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
