import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "glass-panel rounded-xl p-6 text-card-foreground shadow-sm transition-all hover:border-white/10",
            className
        )}
        {...props}
    />
));
Card.displayName = "Card";

export { Card };
