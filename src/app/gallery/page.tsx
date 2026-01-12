import DomeGallery from "@/components/ui/dome-gallery";
import StarBorder from "@/components/ui/star-border";
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
    return (
        <div className="flex h-screen w-full flex-col bg-[#060010] overflow-hidden">

            {/* Absolute Header to overlay on the gallery */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 flex items-center justify-between pointer-events-none">
                <Link href="/" className="pointer-events-auto">
                    <StarBorder as="button" speed="4s" thickness={5} className="flex items-center gap-2 px-4 py-2">
                        <ArrowLeft className="h-4 w-4" /> Volver al Inicio
                    </StarBorder>
                </Link>

                <h1 className="font-serif text-2xl font-bold text-white opacity-80 backdrop-blur-md">
                    Galería Inmersiva
                </h1>
            </div>

            <div className="flex-1 w-full h-full relative">
                {/* Interaction Hand Hint */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none animate-fade-out opacity-0" style={{ animationDelay: '3s', animationFillMode: 'forwards', animationName: 'fadeOut' }}>
                    <div className="bg-black/40 backdrop-blur-md rounded-full px-6 py-3 text-white flex items-center gap-3 animate-pulse">
                        <span className="text-2xl">👆</span>
                        <span className="text-sm font-medium">Arrastra para explorar</span>
                    </div>
                </div>
                <DomeGallery grayscale={false} />
            </div>
        </div >
    );
}
