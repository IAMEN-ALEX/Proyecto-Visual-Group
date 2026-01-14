"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1], // Custom circOut easing
                opacity: { duration: 0.3 },
                filter: { duration: 0.4 }
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
}
