"use client";

import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Suspense fallback={
                <div className="flex h-full w-full items-center justify-center bg-slate-950/20 animate-pulse">
                    <div className="h-8 w-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
                </div>
            }>
                <Spline
                    scene={scene}
                    onLoad={() => console.log('Spline scene loaded')}
                    onError={() => console.error('Error loading Spline scene')}
                />
            </Suspense>
        </div>
    );
}
