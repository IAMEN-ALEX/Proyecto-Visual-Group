"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface ClientLogoProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export function ClientLogo({ src, alt, width = 150, height = 60 }: ClientLogoProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsHovered(true);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const touch = e.touches[0];
        const rect = divRef.current.getBoundingClientRect();

        if (
            touch.clientX >= rect.left &&
            touch.clientX <= rect.right &&
            touch.clientY >= rect.top &&
            touch.clientY <= rect.bottom
        ) {
            setPosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleLeave}
            className={`group relative flex h-32 w-48 items-center justify-center rounded-2xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-500 
        ${isHovered ? "border-white/20 bg-white/[0.05] shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]" : "border-white/5"}
      `}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`
                }}
            />

            {/* Inner Glow (Original design) */}
            <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* Logo Image */}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`relative z-10 w-auto object-contain transition-all duration-500 transform
          ${isHovered ? "scale-110 opacity-100 grayscale-0" : "h-12 opacity-50 grayscale"}
          ${!isHovered && "h-12"} 
        `}
            />
        </div>
    );
}
